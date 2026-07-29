'use client';

import { Box, Grid } from '@mui/material';
import GlassCard from '../glass-card';
import TypewriterComponent from 'typewriter-effect';

interface ProfileProps {
    hasTyped: boolean;
    onFinishTyping: () => void;
}

export default function Profile({ hasTyped, onFinishTyping }: ProfileProps) {
    const bioContent = (
        <div className="text-base leading-relaxed">
            <p>
                ¡Hola! Soy Reinaldo, y como ingeniero me gusta entender cómo funcionan las cosas, construir soluciones y convertir ideas en algo real. Pero mi forma de crear no termina en el código.
                <br/><br/>La música, el deporte y los videojuegos ocupan un lugar importante en mi vida, y de cierta forma también me ayudan a desconectar.
                <br/><br/>También tengo mis pequeñas obsesiones: relojes, buenos whiskys y una mesa bien servida. Una buena carne, un gran vino y una conversación sin prisas.
                <br/><br/>He creado esta web con el fin de juntar y compartir mis diferentes facetas; y por qué no, divertirme durante el proceso.
            </p>
        </div>
    );


    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(0deg,rgba(212, 163, 115, 1) 0%, rgb(230, 223, 164) 100%)',
                p: { xs: 3, md: 6 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto',
            }}
        >
            <Grid container spacing={6} sx={{ width: '100%', maxWidth: '1200px' }}>
                {/* ==========================================
            FILA SUPERIOR: Bio + Foto Polaroid
           ========================================== */}

                {/* BLOQUE 1: Texto Biografía (Izquierda) */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <GlassCard sx={{ p: 4, height: '100%', minHeight: '320px', color: '#010100' }}>

                        {hasTyped
                            ? (bioContent)
                            : (<div className="space-y-4 text-base leading-relaxed">
                                <TypewriterComponent
                                    onInit={(typewriter) => {
                                        typewriter
                                            .changeDelay(20) // Velocidad de escritura en ms
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
                                            .callFunction(()=>{onFinishTyping()})
                                            .start();
                                    }}
                                />
                            </div>)

                        }


                    </GlassCard>
                </Grid>

                {/* BLOQUE 2: Foto Estilo Polaroid (Derecha) */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        {/* Marco Polaroid con Glassmorphism */}
                        <GlassCard
                            sx={{
                                p: 2,
                                pb: 3,
                                borderRadius: '16px',
                                width: '100%',
                                maxWidth: '320px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: '#010100'
                            }}
                        >
                            {/* Contenedor de la Imagen */}
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '280px',
                                    backgroundImage: "url('/img/Profile.png')",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                            {/* Pie de foto Polaroid (Nombre y Cargo) */}
                            <Box sx={{ mt: 2, textAlign: 'center', width: '100%,' }}>
                                <div className="font-bold text-lg">
                                    Reinaldo Silva Mejía
                                </div>
                                <div>
                                    Ingeniero Informático
                                </div>
                            </Box>
                        </GlassCard>
                    </Box>
                </Grid>

                {/* ==========================================
            FILA INFERIOR: Caja "Conóceme de forma..."
           ========================================== */}
                <Grid size={{ xs: 12, md: 12 }}>
                    <GlassCard
                        sx={{
                            p: 4,
                            width: '100%',
                            color: '#010100'
                        }}
                    >
                        {/* Título de la sección */}
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            {/* TODO: Título "Conóceme de forma..." */}
                            <div className='text-2xl font-bold'>
                                Cónoceme de forma ...
                            </div>
                        </Box>

                        {/* Grid 2x2 para las Redes Sociales / Links */}
                        <Grid container spacing={3}>
                            {/* Opción 1: Profesional (LinkedIn) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {/* TODO: Icono */}
                                    {/* TODO: Link / Texto "Profesional" */}
                                    <span className="text-white/80 text-sm">
                                        [ Link Profesional ]
                                    </span>
                                </Box>
                            </Grid>

                            {/* Opción 2: Personal (Instagram) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {/* TODO: Icono */}
                                    {/* TODO: Link / Texto "Personal" */}
                                    <span className="text-white/80 text-sm">
                                        [ Link Personal ]
                                    </span>
                                </Box>
                            </Grid>

                            {/* Opción 3: Creativa (TikTok) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {/* TODO: Icono */}
                                    {/* TODO: Link / Texto "Creativa" */}
                                    <span className="text-white/80 text-sm">
                                        [ Link Creativa ]
                                    </span>
                                </Box>
                            </Grid>

                            {/* Opción 4: Directa (Email) */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {/* TODO: Icono */}
                                    {/* TODO: Link / Texto "Directa" */}
                                    <span className="text-white/80 text-sm">
                                        [ Link Directa ]
                                    </span>
                                </Box>
                            </Grid>
                        </Grid>
                    </GlassCard>
                </Grid>
            </Grid>
        </Box >
    );
}