import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col my-5 mx-5 sm:mx-0 sm:flex-row gap-14 justify-center">
        <div>
          <h2 className="text-2xl font-semibold mb-10">
            Got any queries on moving?
          </h2>
          <Link href="#" className="bg-gray-200 py-4 px-9 rounded-2xl">
            Find Out More
          </Link>
          <p className="mt-10">Email us at move@safemover.co.ke</p>
        </div>
        <div>
          <p className="font-bold">Popular moving destinations in Kenya</p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Nairobi to Thika in one day
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Nairobi to Diani
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Nairobi to Naivasha
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving to Nanyuki from Nairobi
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving to Mombasa from Nairobi
          </p>
        </div>
        <div>
          <p className="font-bold">Popular international moving destinations</p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Dubai to Kenya
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving From Kenya to Australia
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Kenya to Canada
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Kenya to Germany
          </p>
          <p className="mt-1 text-black hover:text-[#00008B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Moving from Kenya to India
          </p>
        </div>
        <div>
          <img src="/arrow-up.svg" alt="Arrow up" className="w-14 h-14" />
        </div>
      </div>
      <div className="bg-[#00008B] w-full p-5 flex flex-col sm:flex-row text-white text-center">
        <p>&copy; {currentYear} Safe Movers. All rights reserved.</p>
        <span className="sm:ml-36">
          <a
            href="https://creativeage.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-red-200"
          >
            <p className="font-custom uppercase">
              A dynamic web application by Creative Age
            </p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
