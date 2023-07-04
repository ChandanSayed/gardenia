import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { AiFillStar } from 'react-icons/ai';
import e1 from '/public/images/e1.png';
import e2 from '/public/images/e2.png';
import e3 from '/public/images/e3.png';

const Testimonial = ({ setSlug }) => {
  const testimonialList = [
    { id: 1, name: 'Chance Korsgaard', img: e1, classes: 'relative left-[-16px] md:left-10 md:z-20', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 2, name: 'Lydia Kenter', img: e2, classes: 'relative left-[-50px] top-8 md:left-[-10px] md:z-20 md:top-8', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 3, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-84px] md:left-[-50px] md:z-20', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 4, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-16px] top-[-36px] md:left-20 md:z-20', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 5, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-50px] top-4 md:left-[-10px] md:z-20 md:top-8', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 6, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-84px] top-[-36px] md:left-[-80px] md:top-[-20px] md:z-20', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 7, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-16px] top-[-56px] md:left-10 md:z-20', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 8, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-50px] top-[-8px] md:left-[-10px] md:z-20 md:top-8', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
    { id: 9, name: 'Jaylon Lipshutz', img: e3, classes: 'relative left-[-84px] top-[-56px] md:left-[-50px] md:top-[-40px] md:z-20', description: '”Lorem ipsum dolor sit a consectetur adipiscing elit fusce porttitor eleifend nunc elementum ullamcorper suspendisse eleifend blandit”', ratting: Array(5).fill() },
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.25,
  });
  if (inView) {
    if (entry.target.id == 'Testimonial' && entry.isIntersecting) {
      setSlug('Testimonial');
    }
  }
  return (
    <div className="bg-[#40DA90] bg-opacity-10 pt-16 pb-0 md:pb-24 px-4 rounded-md overflow-hidden" ref={ref} id="Testimonial">
      <h3 className="text-4xl lg:text-6xl font-semibold mb-12 text-center">Testimonial</h3>
      <div className="flex flex-wrap min-w-[420px]">
        {testimonialList.map((list) => {
          return (
            <div className={`w-1/3 min-w-[140px] md:w-1/3 shadow bg-white shadow-[#D1D1D1] rounded-md border border-[#D1D1D1] text-center p-2 pb-6 mb-2 md:mb-0 ${list.classes}`} key={list.id}>
              <Image src={list.img} alt="Icon" className="mx-auto my-2 w-16 h-16 rounded-full" />
              <h4 className="font-medium text-base md:text-lg mb-2">{list.name}</h4>
              <p className="text-[10px] md:text-base">{list.description}</p>
              <div className="flex mt-2 justify-center">
                {list.ratting.map((rate, i) => {
                  return <AiFillStar key={i} className="text-[#FFB800] mx-1" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
