import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { BsArrowRight } from 'react-icons/bs';
import contactImg from '/public/images/contact-img.png';

const Contact = ({ setSlug }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  // const about = useRef();
  if (inView) {
    if (entry.target.id == 'Contact' && entry.isIntersecting) {
      setSlug('Contact');
    }
  }
  return (
    <div className="flex flex-col lg:flex-row justify-between" ref={ref} id="Contact">
      <div className="left relative lg:w-[49%]">
        <div className="overlay absolute top-[-5%] h-[110%] w-[70%] bg-[#EEE061] opacity-20 rounded-[30px] "></div>
        <Image src={contactImg} alt="Contact Image" className="relative z-10 w-[86%] lg:w-full lg:max-w-[568px] ml-8 md:ml-0 md:pl-10" />
      </div>
      <div className="right lg:w-[49%] mt-20 lg:mt-8">
        <h3 className="text-4xl lg:text-6xl font-semibold mb-4">Still have doubts?</h3>

        <p className="text-base lg:text-lg mb-4">
          Feel free to reach out to your dentist with any <br /> questions you might have.
        </p>
        <form action="/" className="mt-8">
          <div className="flex justify-between pb-2">
            <div className="w-[48%]">
              <label htmlFor="fName" className="block mb-2">
                First Name
              </label>
              <input type="text" placeholder="Enter your first name here..." className="w-full border p-2 rounded-md" />
            </div>
            <div className="w-[48%]">
              <label htmlFor="lName" className="block mb-2">
                Last Name
              </label>
              <input type="text" placeholder="Enter your first name here..." className="w-full border p-2 rounded-md" />
            </div>
          </div>
          <div className="flex justify-between pb-2">
            <div className="w-[48%]">
              <label htmlFor="fName" className="block mb-2">
                Phone
              </label>
              <input type="number" placeholder="Enter your number..." className="w-full border p-2 rounded-md" />
            </div>
            <div className="w-[48%]">
              <label htmlFor="lName" className="block mb-2">
                Email
              </label>
              <input type="email" placeholder="Enter your email..." className="w-full border p-2 rounded-md" />
            </div>
          </div>
          <div className="pb-2">
            <label htmlFor="lName" className="block mb-2">
              Subject
            </label>
            <select name="subject" id="subject" className="border w-full p-2 rounded-md">
              <option value="subject">Subject</option>
            </select>
          </div>
          <div className="pb-2">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea name="message" id="message" cols="30" rows="6" className="border w-full p-2 rounded-md" placeholder="Write here"></textarea>
          </div>
          <div className="pb-2">
            <button className="btn bg-btnColor text-white flex items-center justify-center py-2 px-8 rounded-[80px] ml-auto mt-4 hover:opacity-80">
              Submit
              <BsArrowRight className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
