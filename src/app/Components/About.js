import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import missionImg from '/public/images/mission-img.png';
import visionImg from '/public/images/vission-img.png';
const About = ({ setSlug }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.9,
  });
  // const about = useRef();
  if (inView) {
    if (entry.target.id == 'About' && entry.isIntersecting) {
      setSlug('About');
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between" ref={ref} id="About">
        <div className="left relative lg:w-[49%]">
          <div className="overlay absolute top-[-10%] h-[120%] w-[70%] bg-[#4863ED] opacity-20 rounded-[30px] "></div>
          <Image src={missionImg} alt="Mission" className="relative z-10 w-[86%] lg:w-full lg:max-w-[568px] ml-8 md:ml-0 md:pl-10" />
        </div>
        <div className="right lg:w-[49%] mt-20 lg:mt-8">
          <h3 className="text-4xl lg:text-6xl font-medium mb-4">Mission</h3>
          <p className="text-base lg:text-lg mb-2">Our mission is to craft a unique dental journey for each of our patients, combining the precision of science with the highest standard of ethical care. With an unwavering commitment to proven methods and the latest technological advancements.</p>
          <p className="text-base lg:text-lg">We transform the routine of dental treatment into an extraordinary craft. blending science and artistry to create a masterpiece of healthy, vibrant smiles.</p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between mt-20 lg:mt-40">
        <div className="right lg:w-[49%] mt-20 lg:mt-8">
          <h3 className="text-4xl lg:text-6xl font-medium mb-4">Vision</h3>
          <p className="text-base lg:text-lg mb-2">Our mission is to craft a unique dental journey for each of our patients, combining the precision of science with the highest standard of ethical care. With an unwavering commitment to proven methods and the latest technological advancements.</p>
          <p className="text-base lg:text-lg">We transform the routine of dental treatment into an extraordinary craft. blending science and artistry to create a masterpiece of healthy, vibrant smiles.</p>
        </div>
        <div className="left relative lg:w-[49%]">
          <div className="overlay absolute lg:right-0 top-[-10%] h-[120%] w-[70%] bg-[#40DA90] opacity-20 rounded-[30px] "></div>
          <Image src={visionImg} alt="Mission" className="relative z-10 w-[86%] lg:w-full lg:max-w-[568px] ml-8 md:ml-auto md:mr-0 md:pr-10" />
        </div>
      </div>
    </>
  );
};

export default About;
