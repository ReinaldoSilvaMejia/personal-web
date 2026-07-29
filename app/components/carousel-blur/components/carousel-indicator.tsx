'use client';

import { useState, useRef } from 'react';
import { Box, Menu, MenuItem, Typography } from '@mui/material';

interface CarouselIndicatorProps {
  total: number;
  activeIndex: number;
  nextIndex: number;
  titles?: string[];
  onSelectIndex?: (index: number) => void;
}

export default function CarouselIndicator({
  total,
  activeIndex,
  nextIndex,
  titles = [],
  onSelectIndex,
}: CarouselIndicatorProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Manejadores para abrir/cerrar por HOVER
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    // Agregamos un pequeño retardo (200ms) para que no se cierre de golpe si el puntero se mueve rápido
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (index: number) => {
    if (onSelectIndex) {
      onSelectIndex(index);
    }
    setAnchorEl(null);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'absolute',
        zIndex: 10,
        // Mantener la misma posición que la cápsula
        right: { xs: '50%', md: '24px' },
        top: { xs: 'auto', md: '50%' },
        bottom: { xs: '24px', md: 'auto' },
        transform: {
          xs: 'translateX(50%)',
          md: 'translateY(-50%)',
        },
      }}
    >
      {/* CÁPSULA / BOTÓN INDICADOR */}
      <Box
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px) saturate(180%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          padding: { xs: '8px 16px', md: '16px 8px' },
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          flexDirection: { xs: 'row', md: 'column' },

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderColor: 'rgba(255, 255, 255, 0.35)',
          },
        }}
      >
        {Array.from({ length: total }).map((_, index) => {
          const isFocus = index === activeIndex;
          const isBlur = index === nextIndex;

          return (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                transition: 'all 0.3s ease-in-out',
                display: 'block',

                // Focus
                ...(isFocus && {
                  backgroundColor: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
                }),

                // Preview
                ...(isBlur && {
                  backgroundColor: {
                    xs: 'transparent',
                    md: 'rgba(255, 255, 255, 0.4)',
                  },
                  border: {
                    xs: '2px solid rgba(255, 255, 255, 0.3)',
                    md: '2px solid rgba(255, 255, 255, 0.4)',
                  },
                }),

                // Vacío
                ...(!isFocus &&
                  !isBlur && {
                    backgroundColor: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                  }),
              }}
            />
          );
        })}
      </Box>

      {/* MENÚ FLOTANTE (SE SOBREPONE AL HACER HOVER O CLICK) */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        // Desactiva los eventos de puntero del menú para que no interfieran al salir del área
        slotProps={{
          paper: {
            onMouseEnter: () => {
              // Mantener abierto si el puntero entra en el menú
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            },
            onMouseLeave: handleMouseLeave,
            sx: {
              pointerEvents: 'auto',
              minWidth: 160,
              borderRadius: '20px',
              padding: '6px',

              // Glassmorphism iOS
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(20px) saturate(190%)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow:
                '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
            },
          },
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        // IMPORTANTE: Evita que el menú capture el foco bloqueando el puntero
        sx={{
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: total }).map((_, index) => {
          const isSelected = index === activeIndex;
          const isPreview = index === nextIndex;
          const itemLabel = titles[index] || `Pantalla ${index + 1}`;

          return (
            <MenuItem
              key={index}
              onClick={() => handleItemClick(index)}
              sx={{
                borderRadius: '12px',
                margin: '2px 0',
                padding: '8px 16px',
                transition: 'all 0.2s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                ...(isSelected && {
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  fontWeight: 'bold',
                }),

                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: isSelected ? 700 : 400,
                  color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                {itemLabel}
              </Typography>

              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  ml: 2,
                  backgroundColor: isSelected
                    ? '#ffffff'
                    : isPreview
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'transparent',
                }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}