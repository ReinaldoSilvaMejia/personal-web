'use client';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import GlassCard from '../glass-card';
import TypewriterComponent from 'typewriter-effect';
import { Link } from '@mui/material';
import { useEffect } from 'react';

interface ProfileProps {
    hasTyped: boolean;
    onFinishTyping: () => void;
}

export default function Profile({ hasTyped, onFinishTyping }: ProfileProps) {
    const bioContent = (
        <div className="text-base leading-relaxed">
            <p>
                ¡Hola! Soy Reinaldo, y como ingeniero me gusta entender cómo funcionan las cosas, <b>construir soluciones</b> y convertir ideas en algo real. Pero mi forma de crear no termina en el código.
                <br /><br />La música, el deporte y los videojuegos ocupan un lugar importante en mi vida, y de cierta forma también me ayudan a desconectar.
                <br /><br />También tengo mis pequeñas obsesiones: relojes, buenos whiskys y una mesa bien servida. Una buena carne, un gran vino y una conversación sin prisas.
                <br /><br /> He creado esta web con el fin de juntar y <b>compartir mis diferentes facetas;</b> y por qué no, divertirme durante el proceso.
            </p>
        </div>
    );
    
    useEffect(() => {
        if (hasTyped) return;

        // Buscamos directamente el elemento en el DOM mediante el ID
        const container = document.getElementById('bio-scroll-container');
        if (!container) return;

        // Creamos el observador para que haga scroll cada vez que aparezca una letra nueva
        const observer = new MutationObserver(() => {
            // Asignamos el valor directo para asegurar scroll instantáneo y sin tirones
            container.scrollTop = container.scrollHeight;
        });

        // Escuchamos cualquier cambio en el texto o estructura interna
        observer.observe(container, {
            childList: true,
            subtree: true,
            characterData: true,
        });

        return () => observer.disconnect();
    }, [hasTyped]);


    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                backgroundImage: "url('/img/Background profile.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                p: { xs: 3, md: 6 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto',
            }}
        >
            <Grid container spacing={6} sx={{ width: '100%', height: '100%' }}>
                {/* ==========================================
                        FILA SUPERIOR: Bio + Foto Polaroid
                    ========================================== */}
                <Grid
                    container
                    spacing={6}
                    size={12}
                    sx={{ alignItems: 'stretch' }}
                >

                    {/* BLOQUE 1: Foto Estilo Polaroid (Derecha) */}
                    <Grid size={{ xs: 12, md: 5, xl: 4 }} sx={{ display: 'flex' }}>
                        <GlassCard
                            intensity="light"
                            sx={{
                                p: 3,
                                pb: 5,
                                borderRadius: '16px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#010100',
                            }}
                        >
                            {/* Contenedor de la Imagen */}
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: '280px',
                                    aspectRatio: { xs: '1/1', md: '9 / 11' },
                                    position: 'relative',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    margin: '0 auto',
                                }}
                            >
                                <Image
                                    src="/img/Profile.png"
                                    alt="Reinaldo Silva"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 280px"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                    }}
                                    priority
                                />
                            </Box>

                            {/* Pie de foto Polaroid */}
                            <Box sx={{ mt: 2, textAlign: 'center', width: '100%' }}>
                                <div className="font-bold text-lg">
                                    Reinaldo Silva Mejía
                                </div>
                                <div className="text-sm opacity-80">
                                    Ingeniero Informático
                                </div>
                            </Box>
                        </GlassCard>
                    </Grid>

                    {/* BLOQUE 2: Texto Biografía (Izquierda) */}
                    <Grid
                        size={{ xs: 12, md: 7, xl: 8 }}
                        sx={{
                            position: { md: 'relative' },
                            height: { xs: '355px', md: 'auto' },
                        }}
                    >
                        <GlassCard
                            intensity="light"
                            sx={{
                                p: 4,
                                width: '100%',
                                color: '#010100',
                                display: 'flex',
                                flexDirection: 'column',
                                // En escritorio se posiciona absoluto respecto a la Polaroid; en móvil es relativo
                                position: { xs: 'relative', md: 'absolute' },
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '100%', // 👈 Ocupa el 100% de la altura de su Grid asignado

                            }}
                        >
                            {/* Contenedor del texto con Scrollbar interna */}
                            <Box
                                id="bio-scroll-container"
                                onWheel={(e) => {
                                    // Detiene la propagación para que el carrusel no cambie de pantalla
                                    e.stopPropagation();
                                }}
                                onTouchMove={(e) => {
                                    // Para pantallas táctiles / móviles
                                    e.stopPropagation();
                                }}
                                sx={{
                                    flex: 1,
                                    minHeight: 0,
                                    overflowY: 'auto',
                                    pr: 1,

                                    /* Estilos de la Scrollbar sutil */
                                    '&::-webkit-scrollbar': {
                                        width: '6px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        background: 'rgba(0, 0, 0, 0.05)',
                                        borderRadius: '4px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        background: 'rgba(1, 1, 0, 0.25)',
                                        borderRadius: '4px',
                                        '&:hover': {
                                            background: 'rgba(1, 1, 0, 0.4)',
                                        },
                                    },
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: 'rgba(1, 1, 0, 0.25) transparent',
                                }}
                            >
                                {hasTyped ? (
                                    bioContent
                                ) : (
                                    <div className="space-y-4 text-base leading-relaxed">
                                        <TypewriterComponent
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .changeDelay(20)
                                                    .typeString(
                                                        '¡Hola! Soy Reinaldo, y como ingeniero me gusta entender cómo funcionan las cosas, construir soluciones y <b>convertir ideas en algo real.</b> Pero mi forma de crear no termina en el código.'
                                                    )
                                                    .pauseFor(300)
                                                    .typeString(
                                                        '<br/> <br/>La música, el deporte y los videojuegos ocupan un lugar importante en mi vida, y de cierta forma también me ayudan a desconectar.'
                                                    )
                                                    .pauseFor(300)
                                                    .typeString(
                                                        '<br/> <br/>También tengo mis pequeñas obsesiones: relojes, buenos whiskys y una mesa bien servida. Una buena carne, un gran vino y una conversación sin prisas.'
                                                    )
                                                    .pauseFor(300)
                                                    .typeString(
                                                        '<br/> <br/>He creado esta web con el fin de juntar y <b>compartir mis diferentes facetas;</b> y por qué no, divertirme durante el proceso.'
                                                    )
                                                    .callFunction(() => {
                                                        onFinishTyping();
                                                    })
                                                    .start();
                                            }}
                                        />
                                    </div>
                                )}
                            </Box>
                        </GlassCard>
                    </Grid>
                </Grid>

                {/* ==========================================
                    FILA INFERIOR: Conóceme de forma ...
                ========================================== */}
                <Grid size={{ xs: 12 }}>
                    <GlassCard
                        intensity="light"
                        sx={{
                            p: { xs: 3, md: 4 },
                            width: '100%',
                            color: '#010100',
                            mb: { xs: 5, md: 0 }
                        }}
                    >
                        {/* Título de la sección */}
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <h2 className="text-2xl font-bold tracking-tight">
                                Conóceme de forma ...
                            </h2>
                            <p className="text-sm opacity-75 mt-1">
                                Selecciona una faceta para conectar conmigo
                            </p>
                        </Box>

                        {/* Grid 2x2 de Tarjetas Interactivas */}
                        <Grid container spacing={2.5}>
                            {/* 1. Profesional (LinkedIn) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Link
                                    href="https://www.linkedin.com/in/reinaldosilvamejia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="none"
                                    sx={{ display: 'block' }}
                                >
                                    <Box
                                        sx={{
                                            p: 2.5,
                                            borderRadius: '16px',
                                            background: 'rgba(255, 255, 255, 0.35)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1px solid rgba(255, 255, 255, 0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                background: 'rgba(0, 119, 181, 0.08)', // Tono azul LinkedIn sutil
                                                borderColor: 'rgba(0, 119, 181, 0.3)',
                                                boxShadow: '0 10px 20px -5px rgba(0, 119, 181, 0.15)',
                                                '& .arrow-icon': { transform: 'translateX(4px)' }
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <img src="/img/linkedin-icon.webp" width={44} height={44} alt="LinkedIn" />
                                            <Box>
                                                <div className="text-lg font-bold text-gray-900 leading-tight">Profesional</div>
                                                <div className="text-xs text-gray-600 font-normal">Experiencia y proyectos en LinkedIn</div>
                                            </Box>
                                        </Box>
                                        <span className="arrow-icon text-gray-400 font-bold transition-transform duration-300">→</span>
                                    </Box>
                                </Link>
                            </Grid>

                            {/* 2. Personal (Instagram) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Link
                                    href="https://www.instagram.com/reisilva24/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="none"
                                    sx={{ display: 'block' }}
                                >
                                    <Box
                                        sx={{
                                            p: 2.5,
                                            borderRadius: '16px',
                                            background: 'rgba(255, 255, 255, 0.35)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1px solid rgba(255, 255, 255, 0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                background: 'rgba(225, 48, 108, 0.08)', // Tono rosa Instagram sutil
                                                borderColor: 'rgba(225, 48, 108, 0.3)',
                                                boxShadow: '0 10px 20px -5px rgba(225, 48, 108, 0.15)',
                                                '& .arrow-icon': { transform: 'translateX(4px)' }
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <img src="/img/Instagram_icon.png" width={40} height={40} alt="Instagram" />
                                            <Box>
                                                <div className="text-lg font-bold text-gray-900 leading-tight">Personal</div>
                                                <div className="text-xs text-gray-600 font-normal">Mi día a día y aficiones</div>
                                            </Box>
                                        </Box>
                                        <span className="arrow-icon text-gray-400 font-bold transition-transform duration-300">→</span>
                                    </Box>
                                </Link>
                            </Grid>

                            {/* 3. Creativa (TikTok) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Link
                                    href="https://www.tiktok.com/@reisilva24"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="none"
                                    sx={{ display: 'block' }}
                                >
                                    <Box
                                        sx={{
                                            p: 2.5,
                                            borderRadius: '16px',
                                            background: 'rgba(255, 255, 255, 0.35)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1px solid rgba(255, 255, 255, 0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                background: 'rgba(0, 0, 0, 0.06)', // Tono TikTok sutil
                                                borderColor: 'rgba(0, 0, 0, 0.2)',
                                                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.12)',
                                                '& .arrow-icon': { transform: 'translateX(4px)' }
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <img src="/img/tik-tok-logo.webp" width={44} height={44} alt="TikTok" />
                                            <Box>
                                                <div className="text-lg font-bold text-gray-900 leading-tight">Creativa</div>
                                                <div className="text-xs text-gray-600 font-normal">Contenido en video y experimentos</div>
                                            </Box>
                                        </Box>
                                        <span className="arrow-icon text-gray-400 font-bold transition-transform duration-300">→</span>
                                    </Box>
                                </Link>
                            </Grid>

                            {/* 4. Directa (Email) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Link
                                    href="mailto:reinaldosilvamejia@hotmail.com"
                                    underline="none"
                                    sx={{ display: 'block' }}
                                >
                                    <Box
                                        sx={{
                                            p: 2.5,
                                            borderRadius: '16px',
                                            background: 'rgba(255, 255, 255, 0.35)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1px solid rgba(255, 255, 255, 0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                background: 'rgba(24, 119, 242, 0.08)', // Tono azul Email sutil
                                                borderColor: 'rgba(24, 119, 242, 0.3)',
                                                boxShadow: '0 10px 20px -5px rgba(24, 119, 242, 0.15)',
                                                '& .arrow-icon': { transform: 'translateX(4px)' }
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <img src="/img/email-icon.png" width={40} height={40} alt="Email" />
                                            <Box>
                                                <div className="text-lg font-bold text-gray-900 leading-tight">Directa</div>
                                                <div className="text-xs text-gray-600 font-normal">Contacto directo vía e-mail</div>
                                            </Box>
                                        </Box>
                                        <span className="arrow-icon text-gray-400 font-bold transition-transform duration-300">→</span>
                                    </Box>
                                </Link>
                            </Grid>
                        </Grid>
                    </GlassCard>
                </Grid>
            </Grid>
        </Box>
    );
}