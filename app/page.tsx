'use client';
import CarouselBlur from "./components/carousel-blur/carousel-blur";

const screens = [
  <div key="1" className="bg-red-500 h-full w-full flex items-center justify-center text-white text-3xl font-bold">
    Mayonesa (Pantalla 1)
  </div>,
  <div key="2" className="bg-blue-500 h-full w-full flex items-center justify-center text-white text-3xl font-bold">
    Ketchup (Pantalla 2)
  </div>,
  <div key="3" className="bg-amber-500 h-full w-full flex items-center justify-center text-white text-3xl font-bold">
    Mostaza (Pantalla 3)
  </div>
];

export default function Home() {
  return (
    <div className="w-screen h-dvh">
      <CarouselBlur items={screens} />
    </div>
  );
}
