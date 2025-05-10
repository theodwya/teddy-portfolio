// src/pages/About.tsx
import React from 'react';
import AboutMe from '../components/AboutMe';
import { ProfessionalTimeline } from '../components/ProfessionalTimeline';
import SkillWheel from '../components/TechStack'

export default function About() {
  return (
    <>
      <AboutMe />
      <ProfessionalTimeline />
      <SkillWheel />
      {/* Add any other components or sections you want to include on the About page */}
    </>
  );
  
}