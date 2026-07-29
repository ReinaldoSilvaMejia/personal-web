'use client';

import { Box, BoxProps } from '@mui/material';

interface GlassCardProps extends BoxProps {
  variant?: 'card' | 'pill';
  intensity?: 'light' | 'medium' | 'heavy';
}

export default function GlassCard({
  children,
  variant = 'card',
  intensity = 'medium',
  sx,
  ...props
}: GlassCardProps) {
  // Ajuste opcional de intensidad de desenfoque
  const blurMap = {
    light: 'blur(10px) saturate(150%)',
    medium: 'blur(20px) saturate(190%)',
    heavy: 'blur(30px) saturate(220%)',
  };

  return (
    <Box
      sx={{
        borderRadius: variant === 'pill' ? '24px' : '20px',
        backgroundColor:
          variant === 'pill'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(255, 255, 255, 0.12)',
        backdropFilter: blurMap[intensity],
        WebkitBackdropFilter: blurMap[intensity], // Soporte para Safari
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow:
          variant === 'pill'
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
            : '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        color: '#ffffff',
        transition: 'all 0.3s ease-in-out',
        ...sx, // Permite sobreescribir o añadir padding/márgenes extra cuando sea necesario
      }}
      {...props}
    >
      {children}
    </Box>
  );
}