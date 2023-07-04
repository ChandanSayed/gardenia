'use client';
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import PopUp from './Components/PopUp';
import Services from './Components/Services';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';

export default function Home() {
  const [showPop, setShowPop] = useState(false);
  const [slug, setSlug] = useState('');
  return (
    <main>
      <section className="pb-16">
        <Hero slug={slug} setSlug={setSlug} />
      </section>
      <section className="container py-16">
        <About setSlug={setSlug} />
      </section>
      <section className="container py-4">
        <Services setSlug={setSlug} setShowPop={setShowPop} />
      </section>
      <section className="container py-16">
        <Team setSlug={setSlug} />
      </section>
      <section className="container py-4 px-1 md:px-[15px]">
        <Testimonial setSlug={setSlug} />
      </section>
      <section className="container py-16">
        <Contact setSlug={setSlug} />
      </section>
      <section className="py-12 bg-[#1D202C] rounded-t-md mt-12">
        <Footer />
      </section>
      <PopUp setShowPop={setShowPop} showPop={showPop} />
    </main>
  );
}
