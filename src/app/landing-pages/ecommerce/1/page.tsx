// app/landing/page.tsx
import React from 'react';
import styles from './styles.module.css';
import { HomeSection } from '@/components/landingPages/HomeSection/HomeSection';
import About from '@/components/landingPages/About/About';
import Shop from '@/components/landingPages/Shop/Shop';
import Testimonial from '@/components/landingPages/Testimonial/Testimonial';
import Team from '@/components/landingPages/Team/Team';
import Contact from '@/components/landingPages/Contact/Contact';
export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      {/* Sección de inicio */}
      <HomeSection />

      {/* Sección "Acerca de Nosotros" */}
      <About />

      {/* Sección de productos */}
      <Shop />

      {/* Sección de testimonios */}
      <Testimonial />

      {/* Sección de equipo */}
      <Team />

      {/* Sección de contacto */}
      <Contact />

      {/* Pie de página */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Nuestra Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
