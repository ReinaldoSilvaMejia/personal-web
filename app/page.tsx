'use client';
import { useState } from "react";
import CarouselBlur from "./components/carousel-blur/carousel-blur";
import Career from "./components/pages/career";
import Profile from "./components/pages/profile";
import Projects from "./components/pages/projects";



export default function Home() {

  const [hasTypedProfile, setHasTypedProfile] = useState(false);

  const handleProfileTyped = () => {
    setHasTypedProfile(true);
  };

  const screens = [
    <Profile
      key="profile"
      hasTyped={hasTypedProfile}
      onFinishTyping={handleProfileTyped}
    />,
    <Career key="career" />,
    <Projects key="projects" />,
  ];

  return (
    <div className="w-screen h-dvh">
      <CarouselBlur items={screens} titles={['Perfil', 'Trayectoria', 'Proyectos']} />
    </div>
  );
}
