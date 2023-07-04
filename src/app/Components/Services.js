import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { BsArrowRight } from 'react-icons/bs';
import dentalImplant from '/public/images/dental-implant.png';
import braces from '/public/images/braces.png';
import dentalCare from '/public/images/dental-care.png';
import tooth from '/public/images/tooth.png';
import brushingTeeth from '/public/images/brushing-teeth1.png';
import extraction from '/public/images/extraction1.png';
import dentalImplant1 from '/public/images/dental-implant1.png';
import tooth1 from '/public/images/tooth1.png';
const Services = ({ setShowPop, setSlug }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  // const about = useRef();
  if (inView) {
    if (entry.target.id == 'Services' && entry.isIntersecting) {
      setSlug('Service');
    }
  }
  const serviceList = [
    {
      id: 1,
      name: 'Dental Implants',
      bgColor: 'bg-[#E7EBFF]',
      img: dentalImplant,
    },
    {
      id: 2,
      name: `Braces & Aligners`,
      bgColor: 'bg-[#CEFFE8]',
      img: braces,
    },
    {
      id: 3,
      name: `Veneers`,
      bgColor: 'bg-[#FFFACA]',
      img: dentalCare,
    },
    {
      id: 4,
      name: `Children's Dentistry`,
      bgColor: 'bg-[#DCEFF9]',
      img: tooth,
    },
    {
      id: 5,
      name: `Teeth Cleaning`,
      bgColor: 'bg-[#F6DCF4]',
      img: brushingTeeth,
    },
    {
      id: 6,
      name: `Oral Surgery`,
      bgColor: 'bg-[#F9DBE2]',
      img: extraction,
    },
    {
      id: 7,
      name: `Tooth Extraction`,
      bgColor: 'bg-[#DBEBF9]',
      img: dentalImplant1,
    },
    {
      id: 8,
      name: `Gum Treatment`,
      bgColor: 'bg-[#D9DFFF]',
      img: tooth1,
    },
  ];
  return (
    <div className="bg-[#F9FAFF] py-16 px-4 rounded-[16px]" id="Services" ref={ref}>
      <h3 className="text-4xl lg:text-6xl font-semibold mb-12 text-center">What We Do?</h3>
      <div className="flex flex-wrap justify-between">
        {serviceList.map((service) => {
          return (
            <div className={`my-2 w-[48%] md:w-[24%] flex items-center ${service.bgColor} rounded-[20px] py-4 px-4`} key={service.id}>
              <div className="icon bg-white rounded-md p-2">
                <Image src={service.img} alt="icon" />
              </div>
              <div className="title pl-3">
                <h4 className="font-medium text-base md:text-2xl md:w-28">{service.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => setShowPop(true)} className="btn bg-btnColor text-white flex items-center justify-center py-2 px-4 rounded-[80px] mx-auto mt-16 hover:opacity-80">
        Get in Touch with Our Dentists
        <BsArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Services;
