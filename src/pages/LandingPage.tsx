// src/pages/LandingPage.tsx
import React from 'react';
import LandingPage from '../components/LandingPage';
import HeroSection from '../components/HeroSection';
import ProjectCarousel from '../components/ProjectCarousel';
import MyServices from '../components/MyServices';

export default function Home() {
  return (
  <>
  <HeroSection />
  <LandingPage />
  <MyServices />
  <ProjectCarousel />
  </>
  );
}