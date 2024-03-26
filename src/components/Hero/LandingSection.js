import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function LandingSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/moving-hero-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white md:text-6xl mx-5 sm:mx-24 font-bold text-center">
          Welcome to Safe Movers
        </h1>
        <p className="text-lg md:text-xl text-white mx-5 sm:mx-24 text-center">
          Moving is a complex task requiring physical strength and a sound mind.
          At SafeMovers, we recognize the importance of people. We create a
          positive atmosphere, defining a mover as a multi-skilled professional
          adept at packing, handling, transportation, and setup.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#00008B] text-white rounded-lg hover:bg-[#CC5500] transition duration-300 ease-in-out">
          Explore Services
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button>
          <svg
            className="w-8 h-8 text-white animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 14.586V4a1 1 0 0 1 1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="absolute right-20 top-32 z-10 hidden sm:flex flex-col gap-5 items-center">
        <div className="bg-[#CC5500] w-[1.5px] h-[250px]"></div>
        <Link href="https://facebook/" target="_blank">
          <FaFacebook
            size={25}
            className="text-[#CC5500] hover:-translate-x-1.5"
          />
        </Link>
        <Link href="https://facebook/" target="_blank">
          <BsInstagram
            size={25}
            className="text-[#CC5500] hover:-translate-x-1.5"
          />
        </Link>
        <Link href="https://facebook/" target="_blank">
          <FaSquareXTwitter
            size={25}
            className="text-[#CC5500] hover:-translate-x-1.5"
          />
        </Link>
        <Link href="https://facebook/" target="_blank">
          <FaYoutube
            size={25}
            className="text-[#CC5500] hover:-translate-x-1.5"
          />
        </Link>
      </div>
    </div>
  );
}
