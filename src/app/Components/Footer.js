import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '/public/images/logo.png';

const Footer = () => {
  return (
    <div className="px-4 md:px-8 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src={logo} alt="Logo" className="max-w-[125px]" />
          <h5 className="mt-8 mb-4">Follow us on</h5>
          <div className="social-icons mb-6 flex gap-2">
            <a href="#" className="border border-white p-2 text-lg rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="border border-white p-2 text-lg rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="border border-white p-2 text-lg rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="md:w-1/4 text-white">
          <h5 className="font-medium text-base md:text-lg mb-2">Quick Links</h5>
          <ul>
            <li>
              <a className="font-medium text-sm md:text-base" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="font-medium text-sm md:text-base" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="font-medium text-sm md:text-base" href="#">
                Media
              </a>
            </li>
            <li>
              <a className="font-medium text-sm md:text-base" href="">
                Our team
              </a>
            </li>
            <li>
              <a className="font-medium text-sm md:text-base" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 text-white">
          <h5 className="font-medium text-base md:text-lg mb-2">Contact</h5>
          <span className="text-sm pt-2 block">Phone Number</span>
          <p className="text-sm md:text-base font-medium">123-4567-890</p>
          <span className="text-sm pt-2 block">Open Hour</span>
          <p className="text-sm md:text-base font-medium mt-2">09:00 AM to 06:00 PM</p>
          <span className="text-sm pt-2 block">Address</span>
          <p className="text-sm md:text-base font-medium mt-2">
            Villa 108, Jumeirah Beach Road Dubai <br /> United Arab Emirates
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex justify-between items-center">
        <small>© 2023 Gardenia Dental Clinic.</small>{' '}
        <ul className="flex flex-col md:flex-row">
          <li>
            <a href="#" className="mr-4 text-sm md:text-base font-medium">
              Term of use
            </a>
          </li>
          <li>
            <a href="#" className="text-sm md:text-base font-medium">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
