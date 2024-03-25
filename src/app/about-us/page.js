import AutoImageCarousel from '@/sections/AutoImageCarousel';
import ImageCarousel from '@/sections/ImageCarousel';
import OurCulture from '@/sections/OurCulture';
import OurTeam from '@/sections/OurTeam';
import SafeMoversBoard from '@/sections/SafeMoversBoard';

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-4xl mt-5 mx-5 sm:mx-24 text-gray-400 font-bold mb-3">
        Best Car Movers in Nairobi, Kenya
      </h1>
      <div className="flex flex-col sm:flex-row my-14 gap-x-28 mx-5 sm:mx-24">
        <div className="sm:w-1/2 ">
          <h1 className="text-4xl sm:mt-14 text-[#570598] font-bold">
            The SafeMover Brand
          </h1>
        </div>
        <div className="sm:w-1/2">
          <p className="sm:text-center">
            Moving is a complex task requiring physical strength and a sound
            mind. At SafeMovers, we recognize the importance of people. We
            create a positive atmosphere, defining a mover as a multi-skilled
            professional adept at packing, handling, transportation, and setup.
          </p>
        </div>
      </div>
      <div className="my-14">
        <ImageCarousel />
      </div>
      <div className="my-14">
        <h1 className="font-bold text-5xl text-gray-700 mx-5 sm:mx-24 my-3">
          Our History
        </h1>
        <p className="font-bold text-gray-700 mx-5 sm:mx-24 my-3">
          Read the progress we have made throughtout the years
        </p>
        <AutoImageCarousel />
      </div>
      <div className="my-14 mx-5 sm:mx-24">
        <h1 className="text-2xl sm:text-4xl my-4 text-[#570598] font-bold">
          SafeMovers Academy - Building The Best
        </h1>
        <hr className="border-black" />
        <div className="flex flex-col sm:flex-row my-4">
          <div className="flex sm:w-1/2 justify-center items-center">
            <img
              src="/international-movers-banner.jpg"
              alt="Safe Movers Staff Showing Packing Boxes"
              className="w-full h-80"
            />
          </div>
          <div className="flex sm:w-1/2 justify-center mt-4 items-center text-center">
            <p className="text-center">
              Discover the SafeMovers Academy, where movers are trained using a
              comprehensive curriculum. Our movers are certified with over 70
              skills, delivering true value to clients while upholding the
              moving industry’s name. The academy serves as our knowledge hub,
              providing continuous training for all employees. At SafeMovers,
              everyone is a mover, and going through the academy is a way of
              life, creating empowered individuals even beyond the moving
              industry.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-black mx-5 sm:mx-24" />
      <div className="my-14">
        <SafeMoversBoard />
      </div>
      <hr className="border-black mx-5 sm:mx-24" />
      <div className="my-14 mx-5 sm:mx-24">
        <h1 className="text-4xl text-[#570598] font-bold">
          Technology & Innovation
        </h1>
        <div className="flex flex-col sm:flex-row my-4">
          <div className="flex sm:w-1/2 mb-3 justify-center items-center">
            <img
              src="/carousel3.jpg"
              alt="Safe Movers Staff Showing Packing Boxes"
              className="w-full h-auto"
            />
          </div>
          <div className="flex sm:w-1/2 justify-center items-center text-center">
            <p>
              As an industry leader in East Africa, SafeMovers embraces modern
              technology to enhance client experiences and improve efficiency.
              Our bespoke CRM system, SafeMovers Mobility, facilitates
              communication and secures client data. Experience our paperless
              pre-move survey process, conducted by Move Consultants equipped
              with tablets and custom-made apps. SafeMovers ensures the safety
              of client data, even conducting virtual/video surveys, a valuable
              service in the era of COVID-19.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-black mx-5 sm:mx-24 my-4" />
      <div className="my-14">
        <OurCulture />
      </div>
      <div className="my-14">
        <h1 className="text-2xl sm:text-4xl text-[#570598] font-bold mx-5 sm:mx-24">
          Our Team
        </h1>
        <hr className="border-black my-3 mx-5 sm:mx-24" />
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUs;
