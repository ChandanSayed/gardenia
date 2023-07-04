import { FaWhatsapp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import Navbar from './Navbar';
import Menu from './Menu';

const Hero = ({ slug, setSlug }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  // const about = useRef();
  if (inView) {
    if (entry.target.id == 'hero' && entry.isIntersecting) {
      setSlug('');
    }
  }
  return (
    <div className={`hero-bg pt-28 pb-32 md:pt-52 md:pb-56 md:min-h-screen relative`}>
      <Navbar />
      <div className="container">
        <h2 className="text-defaultColor text-4xl md:text-7xl font-semibold" ref={ref} id="hero">
          Blossoming Smiles, <br /> Rooted in Care
        </h2>
        <h4 className="text-defaultColor text-2xl md:text-5xl font-semibold my-6 md:mt-8 md:mb-12">Gardenia Dental.</h4>
        <a href="#" className="flex justify-between items-center bg-defaultColor p-2 rounded-full text-white max-w-[200px]">
          <span className="pl-6">Enquire Now</span>
          <span className="p-2 block rounded-full bg-whatsappColor">
            <FaWhatsapp className="text-xl text-white" />
          </span>
        </a>
      </div>
      <Menu slug={slug} />
    </div>
  );
};

export default Hero;
