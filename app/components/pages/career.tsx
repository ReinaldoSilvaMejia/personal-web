import { useState } from 'react';
import { Box, Grid, Typography, Chip, Paper, IconButton } from '@mui/material';
import GlassCard from '../glass-card';
import React, { useRef } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// 1. Interfaz completa y dinámica
interface Company {
  id: string;
  name: string;
  img: string;
  sector: string;
  client?: string;
  role: string;
  projects: string[];
  tasks: string[];
}

export default function Career() {
  // 2. Datos dinámicos para cada empresa
  const companies: Company[] = [
    {
      id: 'nextflow',
      name: 'The Next Flow',
      img: '/img/the_next_flow_sl_logo.jpg',
      sector: 'Aerolíneas',
      client: 'Iberojet / Ávoris',
      role: 'Team Lead & Senior Software Engineer',
      projects: [
        'Motor de reservas para la unificación y control del sistema de reservas.',
        'Unificación de sistemas de registros de vuelo para trazar la información de vuelo.',
        'Sistema de notificaciones automatizadas vía WhatsApp para pasajeros.',
      ],
      tasks: [
        'Coordinar y ofrecer soporte técnico a un equipo de desarrolladores.',
        'Analizar, planificar y desarrollar aplicaciones para la optimización operativa de la aerolínea.',
        'Apoyar a los analistas de los diferentes sistemas en las integraciones técnicas.'
      ]
    },
    {
      id: 'ue',
      name: 'Universidad Europea',
      img: '/img/universidad_europea_de_madrid_logo.jpg',
      sector: 'Educativo',
      client: '',
      role: 'Profesor de Máster',
      projects: [
        'Impartir el módulo "Introducción al Business Process Managment" en el Master Universitario en Dirección de Operaciones y Procesos Estratégicos.'
      ],
      tasks: [
        'Enseñar la metodología BPMN a los alumnos mediante casos prácticos.',
        'Explicar la importancia del stack tecnológico en la optimización de procesos.'
      ]
    },
    {
      id: 'minsait',
      name: 'Minsait Payments',
      img: '/img/minsait_logo.jpg',
      sector: 'Fintech / Banca',
      client: 'Banco Santander',
      role: 'Senior Software Engineer',
      projects: [
        'Sistema de registro y procesador de pagos mediante TPV. (Getnet)'
      ],
      tasks: [
        'Análisis técnico y desarrollo de microservicios transaccionales.',
        'Documentación técnica y guías de arquitectura de usuario.',
        'Optimización de integraciones con base de datos de alto rendimiento.'
      ]
    },
    {
      id: 'sembo',
      name: 'Sembo',
      img: '/img/sembo_travel_logo.jpg',
      sector: 'Travel Tech',
      client: '',
      role: 'Full Stack Developer',
      projects: [
        'Integración de servicios de terceros mediante TravelGate.',
        'Rediseño completo del flujo de pixel tracking de la compañía.'
      ],
      tasks: [
        'Desarrollo de interfaces dinámicas en Vue.js para el motor de reservas.',
        'Migración de código legacy a arquitecturas modernas en .NET Core.',
        'Diseñar y mejorar los dashboards de Graphana para la monitorización.'
      ]
    },
    {
      id: 'logitravel',
      name: 'Logitravel',
      img: '/img/logitravel_logo.jpg',
      sector: 'Turismo / E-commerce',
      client: 'Viajes el Corte Inglés',
      role: 'Core Software Engineer',
      projects: [
        'Automatización de campañas publicitarias integradas con Google Ads.',
        'Desarrollo de juego Wordle personalizado para promocionar destinos en tendencia.'
      ],
      tasks: [
        'Mantenimiento y evolución de sistemas backend en VB .NET.',
        'Soporte a los usuarios de las herramientas de la intranet.',
        'Monitorización y control de excepciones mediante canales de hang outs.'
      ]
    },
    {
      id: 'webbeds',
      name: 'WebBeds',
      img: '/img/webbeds_logo.jpg',
      sector: 'B2B Travel Distribution',
      client: '',
      role: 'Software Engineer Intern',
      projects: [
        'Implementación de elastich search en búsquedas de disponibilidad.'
      ],
      tasks: [
        'Desarrollo de servicios API REST utilizando .NET Core.',
        'Despliegue y configuración de entornos de pruebas con Docker.'
      ]
    }
  ];

  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(companies[0].id);
  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) || companies[0];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Función para desplazar horizontalmente con las flechas
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 120; // Pixeles a desplazar por click
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        p: { xs: 2, sm: 4, md: 6 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/img/Background career.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflowY: 'auto',
      }}
    >
      <Grid container spacing={6} sx={{ width: '100%', height: '100%' }}>

        {/* ======================================================== */}
        {/* 👈 COLUMNA IZQUIERDA: MENÚ DE EMPRESAS                   */}
        {/* ======================================================== */}
        <Grid size={{ xs: 12, md: 3, lg: 4 }}>
          {/* Contenedor relativo para posicionar las flechas en móviles */}
          <Box sx={{ position: 'relative', width: '100%' }}>

            {/* ⬅️ Flecha Izquierda (Visible solo en pantallas pequeñas xs/sm) */}
            <IconButton
              onClick={() => handleScroll('left')}
              sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'absolute',
                left: -12,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(4px)',
                color: '#475569',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                width: 32,
                height: 32,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>

            {/* ➡️ Flecha Derecha (Visible solo en pantallas pequeñas xs/sm) */}
            <IconButton
              onClick={() => handleScroll('right')}
              sx={{
                display: { xs: 'flex', md: 'none' },
                position: 'absolute',
                right: -12,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(4px)',
                color: '#475569',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                width: 32,
                height: 32,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>

            {/* 📦 CONTENEDOR CARRUSEL DE EMPRESAS */}
            <Box
              ref={scrollContainerRef}
              className="no-carousel-swipe"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                gap: 2,
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                // Manejo estricto del scroll horizontal
                overflowX: { xs: 'auto', md: 'visible' },
                overflowY: 'hidden',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none', // Firefox
                paddingBottom: 1,
                '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari/Edge
              }}
            >
              {companies.map((company) => {
                const isSelected = company.id === selectedCompanyId;

                return (
                  <GlassCard
                    intensity="light"
                    key={company.id}
                    onClick={() => setSelectedCompanyId(company.id)}
                    sx={{
                      p: { xs: 1.5, md: 1.5, lg: 2 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' },
                      gap: { xs: 1.5, md: 0, lg: 2 },
                      minHeight: '72px',
                      // Fijamos el tamaño mínimo en móvil para que no se aplasten los botones
                      minWidth: { xs: '68px', md: 'auto' },
                      flexShrink: 0, // Evita que las tarjetas se deformen en flex-row
                      cursor: 'pointer',
                      boxShadow: isSelected ? {xs:'none',  md: '0 8px 1px rgba(0,0,0,0.2)'} : 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        background: 'rgba(255, 255, 255, 0.35)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                      }}
                    >
                      <img
                        src={company.img}
                        alt={company.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>

                    {/* 📝 NOMBRE DE LA EMPRESA: Oculto en móviles y en md, solo visible en lg+ */}
                    <Box
                      sx={{
                        flex: 1,
                        fontWeight: 600,
                        color: '#1C1C1E',
                        fontSize: '1rem',
                        display: { xs: 'none', md: 'none', lg: 'block' }
                      }}
                    >
                      {company.name}
                    </Box>
                  </GlassCard>
                );
              })}
            </Box>
          </Box>
        </Grid>

        {/* ======================================================== */}
        {/* 👉 COLUMNA DERECHA: FICHA DETALLADA MEJORADA             */}
        {/* ======================================================== */}
        <Grid size={{ xs: 12, md: 9, lg: 8 }} sx={{paddingBottom: {xs: 10 , md:3}}}>
          <GlassCard
            intensity="light"
            sx={{
              p: { xs: 3, md: 4.5 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
            }}
          >
            {/* 1. CABECERA: Logo + Rol Principal */}
            <Box
              key={`header-${selectedCompany.id}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 3,
                width: '100%',
                animation: 'fadeIn 0.4s ease-in-out',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(-6px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                }
              }}
            >
              <Box
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                  border: '3px solid #FFFFFF'
                }}
              >
                <img
                  src={selectedCompany.img}
                  alt={selectedCompany.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Rol / Puesto como Titular */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#0F172A',
                  textAlign: 'center',
                  fontSize: { xs: '1.25rem', md: '1.45rem' },
                  mb: 1.5
                }}
              >
                {selectedCompany.role}
              </Typography>

              {/* Badges de Sector y Cliente */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Chip
                  label={`Sector: ${selectedCompany.sector}`}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.55)',
                    color: '#1E293B',
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.7)',
                  }}
                />
                {selectedCompany.client && (
                  <Chip
                    label={`Cliente: ${selectedCompany.client}`}
                    sx={{
                      backgroundColor: 'rgba(15, 23, 42, 0.08)',
                      color: '#0F172A',
                      fontWeight: 600,
                      border: '1px solid rgba(15, 23, 42, 0.12)',
                    }}
                  />
                )}
              </Box>
            </Box>

            {/* 2. BLOQUES DE INFORMACIÓN DENTRO DE SUB-CARDS */}
            <Box
              key={`content-${selectedCompany.id}`}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                animation: 'fadeIn 0.5s ease-in-out'
              }}
            >
              {/* Bloque 1: Proyectos */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#0F172A',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  🚀 Proyectos Destacados
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0, color: '#334155' }}>
                  {selectedCompany.projects.map((proj, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        mb: idx === selectedCompany.projects.length - 1 ? 0 : 0.8,
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        paddingBottom: 1.5
                      }}
                    >
                      {proj}
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* Bloque 2: Tareas / Responsabilidades */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#0F172A',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  ⚡ Responsabilidades y Tareas
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0, color: '#334155' }}>
                  {selectedCompany.tasks.map((task, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        mb: idx === selectedCompany.tasks.length - 1 ? 0 : 0.8,
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                        paddingBottom: 1.5
                      }}
                    >
                      {task}
                    </Box>
                  ))}
                </Box>
              </Paper>

            </Box>
          </GlassCard>
        </Grid>

      </Grid>

    </Box>
  );
}