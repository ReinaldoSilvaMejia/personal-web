'use client';

import { useState, useRef } from 'react';
import { Grid, Box } from '@mui/material';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

interface CarouselBlurProps {
  items: React.ReactNode[];
}

export default function CarouselBlur({ items }: CarouselBlurProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const isCooldown = useRef(false);

  const touchStartX = useRef<number | null>(null);

  if (!items || items.length === 0) return null;

  const activeIndex = currentIndex;
  const nextIndex = (currentIndex + 1) % items.length;


  const goNext = () => {
    if (isCooldown.current) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    activateCooldown();
  };

  const goPrev = () => {
    if (isCooldown.current) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    activateCooldown();
  };

  const activateCooldown = () => {
    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 800);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) goNext();
    else if (e.deltaY < 0) goPrev();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (diffX > minSwipeDistance) {
      goNext();
    } else if (diffX < -minSwipeDistance) {
      goPrev();
    }

    touchStartX.current = null;
  };

  const transitionStyle: Transition = { duration: 0.8, ease: [0.33, 1, 0.68, 1] };

  const mainVariants: Variants = {
    initial: (dir: number) => ({
      opacity: 0,
      filter: 'blur(8px)',
      rotate: dir > 0 ? 15 : -15,
      y: '5%',
    }),
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      rotate: 0,
      y: '0%',
      transition: transitionStyle,
    },
    exit: (dir: number) => ({
      opacity: 0,
      filter: 'blur(10px)',
      rotate: dir > 0 ? -25 : 25,
      y: '8%',
      transition: transitionStyle,
    }),
  };

  const previewVariants: Variants = {
    initial: (dir: number) => ({
      opacity: 0,
      filter: 'blur(12px)',
      rotate: dir > 0 ? 20 : -20,
      y: '10%',
    }),
    animate: {
      opacity: 1,
      filter: 'blur(6px) brightness(0.8)',
      rotate: 0,
      y: '0%',
      transition: transitionStyle,
    },
    exit: (dir: number) => ({
      opacity: 0,
      filter: 'blur(4px)',
      rotate: dir > 0 ? -15 : 15,
      y: '5%',
      transition: transitionStyle,
    }),
  };

  return (
    <Grid
      container
      rowSpacing={0}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        userSelect: 'none',
        touchAction: 'pan-y',
        backgroundColor: '#121212',
      }}
    >
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={`main-${activeIndex}`}
            custom={direction}
            variants={mainVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              originX: 0.5,
              originY: 0,
            }}
          >
            <Box sx={{ height: '100%', width: '100%' }}>
              {items[activeIndex]}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Grid>

      <Grid
        size={{ xs: 0, md: 5 }}
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={`preview-${nextIndex}`}
            custom={direction}
            variants={previewVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              originX: 0.5,
              originY: 0,
            }}
          >
            <Box sx={{ height: '100%', width: '100%' }}>
              {items[nextIndex]}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid>
  );
}