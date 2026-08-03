import { useState } from 'react';
import { Box, Grid, Typography, Chip, Paper } from '@mui/material';
import GlassCard from '../glass-card';

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
      sector: 'Aerolíneas & Consultoría Tech',
      client: 'Iberojet / Ávoris',
      role: 'Team Lead & Senior Software Engineer',
      projects: [
        'Automatización del proceso de nóminas para tripulación de vuelo de Iberojet.',
        'Sistema de notificaciones automatizadas vía WhatsApp para pasajeros.'
      ],
      tasks: [
        'Coordinación y soporte técnico a un equipo de desarrolladores.',
        'Asegurar la calidad del código y planificación estratégica de tareas.',
        'Análisis de requisitos e implementación de soluciones end-to-end.'
      ]
    },
    {
      id: 'ue',
      name: 'Universidad Europea',
      img: '/img/universidad_europea_de_madrid_logo.jpg',
      sector: 'Educación Superior / EdTech',
      client: 'Máster Universitario en Dirección de Operaciones',
      role: 'Profesor de Máster',
      projects: [
        'Docencia del módulo "Introducción a BPM" en el Máster de Operaciones.'
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
        'Getnet: Sistema de registro y procesador de pagos mediante TPV.'
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
      client: 'Stena Line Travel Group AB',
      role: 'Full Stack Developer',
      projects: [
        'Integración de servicios de terceros mediante TravelGate.',
        'Rediseño completo del flujo de pixel tracking de la compañía.'
      ],
      tasks: [
        'Desarrollo de interfaces dinámicas en Vue.js para el motor de reservas.',
        'Migración de código legacy a arquitecturas modernas en .NET Core.'
      ]
    },
    {
      id: 'logitravel',
      name: 'Logitravel',
      img: '/img/logitravel_logo.jpg',
      sector: 'Turismo / E-commerce',
      client: 'Logitravel Group',
      role: 'Core Software Engineer',
      projects: [
        'Automatización de campañas publicitarias integradas con Google Ads.',
        'Juego "Wordle" personalizado para promocionar destinos en tendencia.'
      ],
      tasks: [
        'Creación y activación automática de publicidad desde la intranet corporativa.',
        'Mantenimiento y evolución de sistemas backend en VB .NET.'
      ]
    },
    {
      id: 'webbeds',
      name: 'WebBeds',
      img: '/img/webbeds_logo.jpg',
      sector: 'B2B Travel Distribution',
      client: 'WebBeds Europe',
      role: 'Software Engineer Intern',
      projects: [
        'Contenedorización de microservicios para la red de distribución B2B.'
      ],
      tasks: [
        'Desarrollo de servicios API REST utilizando .NET Core.',
        'Despliegue y configuración de entornos de pruebas con Docker.'
      ]
    }
  ];

  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(companies[0].id);
  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) || companies[0];

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={6} sx={{ width: '100%', height: '100%' }}>

        {/* ======================================================== */}
        {/* 👈 COLUMNA IZQUIERDA: MENÚ DE EMPRESAS                   */}
        {/* ======================================================== */}
        <Grid size={{ xs: 12, md: 5, lg: 4 }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
            {companies.map((company) => {
              const isSelected = company.id === selectedCompanyId;

              return (
                <GlassCard
                  intensity="light"
                  key={company.id}
                  onClick={() => setSelectedCompanyId(company.id)}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    minHeight: '72px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 20px rgba(0,0,0,0.35)' : 'none',
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

                  <Box sx={{ flex: 1, fontWeight: 600, color: '#1C1C1E', fontSize: '1rem' }}>
                    {company.name}
                  </Box>
                </GlassCard>
              );
            })}
          </Box>
        </Grid>

        {/* ======================================================== */}
        {/* 👉 COLUMNA DERECHA: FICHA DETALLADA MEJORADA             */}
        {/* ======================================================== */}
        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
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
                animation: 'fadeIn 0.5s ease-in-out',
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