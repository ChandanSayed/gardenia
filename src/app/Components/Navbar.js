import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '/public/images/logo.png';

const Navbar = () => {
  return (
    <div className="absolute flex justify-between items-center px-4 left-0 right-0 top-0 pt-6">
      <div className="logo">
        <Link href={`/`}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="whatsapp">
        <a href="#" className="p-3 block rounded-full bg-whatsappColor">
          <FaWhatsapp className="text-3xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
