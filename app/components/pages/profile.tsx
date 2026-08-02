'use client';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import GlassCard from '../glass-card';
import TypewriterComponent from 'typewriter-effect';
import { Link } from '@mui/material';

interface ProfileProps {
    hasTyped: boolean;
    onFinishTyping: () => void;
}

export default function Profile({ hasTyped, onFinishTyping }: ProfileProps) {
    const bioContent = (
        <div className="text-base leading-relaxed">
            <p>
                ¡Hola! Soy Reinaldo, y como ingeniero me gusta entender cómo funcionan las cosas, construir soluciones y convertir ideas en algo real. Pero mi forma de crear no termina en el código.
                <br /><br />La música, el deporte y los videojuegos ocupan un lugar importante en mi vida, y de cierta forma también me ayudan a desconectar.
                <br /><br />También tengo mis pequeñas obsesiones: relojes, buenos whiskys y una mesa bien servida. Una buena carne, un gran vino y una conversación sin prisas.
                <br /><br />He creado esta web con el fin de juntar y compartir mis diferentes facetas; y por qué no, divertirme durante el proceso.
            </p>
        </div>
    );


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

                    {/* BLOQUE 2: Foto Estilo Polaroid (Derecha) */}
                    <Grid size={{ xs: 12, md: 5, xl: 4 }} sx={{ display: 'flex' }}>
                        <GlassCard
                            intensity="light"
                            sx={{
                                p: 3,
                                pb: 4,
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
                                    aspectRatio: { xs: '1/1', md: '9 / 13' },
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

                    {/* BLOQUE 1: Texto Biografía (Izquierda) */}
                    <Grid
                        size={{ xs: 12, md: 7, xl: 8 }}
                        sx={{
                            position: { md: 'relative' },
                            // En móvil le damos una altura fija para que la tarjeta ocupe su propio espacio
                            height: { xs: '350px', md: 'auto' },
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
                                                        '¡Hola! Soy Reinaldo, y como ingeniero me gusta entender cómo funcionan las cosas, construir soluciones y convertir ideas en algo real. Pero mi forma de crear no termina en el código.'
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
                                                        '<br/> <br/>He creado esta web con el fin de juntar y compartir mis diferentes facetas; y por qué no, divertirme durante el proceso.'
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
            FILA INFERIOR: Caja "Conóceme de forma..."
           ========================================== */}
                <Grid size={{ xs: 12, md: 12 }}>
                    <GlassCard
                        intensity="light"
                        sx={{
                            p: 5,
                            width: '100%',
                            color: '#010100',
                        }}
                    >
                        {/* Título de la sección */}
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <div className="text-2xl font-bold">
                                Conóceme de forma ...
                            </div>
                        </Box>

                        {/* Grid 2x2 para las Redes Sociales / Links */}
                        <Grid container spacing={3}>

                            {/* Opción 1: Profesional (LinkedIn) */}
                            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Link
                                    href="https://www.linkedin.com/in/reinaldosilvamejia/"
                                    underline="none"
                                    color="inherit"
                                    sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                                >
                                    <img src="/img/linkedin-icon.webp" width={50} height={50} alt="LinkedIn" />
                                    <span className="text-xl font-medium">Profesional</span>
                                </Link>
                            </Grid>

                            {/* Opción 2: Personal (Instagram) */}
                            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Link
                                    href="https://www.instagram.com/reisilva24/"
                                    underline="none"
                                    color="inherit"
                                    sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                                >
                                    <img src="/img/Instagram_icon.png" width={42} height={42} alt="Instagram" />
                                    <span className="text-xl font-medium">Personal</span>
                                </Link>
                            </Grid>

                            {/* Opción 3: Creativa (TikTok) */}
                            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Link
                                    href="https://www.tiktok.com/@reisilva24"
                                    underline="none"
                                    color="inherit"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        mr: { md: '28px' }
                                    }}
                                >
                                    <img src="/img/tik-tok-logo.webp" width={50} height={50} alt="TikTok" />
                                    <span className="text-xl font-medium">Creativa</span>
                                </Link>
                            </Grid>

                            {/* Opción 4: Directa (Email) */}
                            <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Link
                                    href="mailto:reinaldosilvamejia@hotmail.com"
                                    underline="none"
                                    color="inherit"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        mr: { md: '18px' }
                                    }}
                                >
                                    <img src="/img/email-icon.png" width={42} height={42} alt="Email" />
                                    <span className="text-xl font-medium">Directa</span>
                                </Link>
                            </Grid>
                        </Grid>
                    </GlassCard>
                </Grid>
            </Grid>
        </Box>
    );
}