const WhyChoose = () => {
  return (
    <div className="flex flex-col bg-gray-300 py-14">
      <h1 className="mx-5 sm:mx-24 my-4 font-bold text-4xl tracking-widest text-center underline decoration-dashed underline-offset-8">
        Why Choose Us
      </h1>
      <p className="mx-5 sm:mx-24 my-4">
        {' '}
        Experience the delight of having breakfast at your old house, and by
        evening, enjoying dinner with feet up at your new house, all without
        breaking a sweat!
      </p>
      <div className="flex flex-col sm:flex-row gap-x-10 mx-5 sm:mx-24">
        <div className="sm:w-1/3 flex flex-col gap-y-9">
          <div className="flex flex-col py-3 px-4 gap-x-7 sm:flex-row">
            <div className="flex justify-center rounded-full">
              <img
                src="/worldwide-world.svg"
                alt="worldwide-world."
                className=" h-28 w-28"
              />
            </div>
            <div>
              <h1 className="my-3 font-bold text-xl">Global Know-how</h1>
              <p>
                We invest in training our staff so you can expect the world's
                best at your doorstep on moving day.
              </p>
            </div>
          </div>

          <div className="flex flex-col py-3 px-4 gap-x-7 sm:flex-row">
            <div className="flex justify-center rounded-full">
              <img
                src="/group-team.svg"
                alt="Group team"
                className=" h-28 w-28"
              />
            </div>
            <div>
              <h1 className="my-3 font-bold text-xl">Dedicated Teams</h1>
              <p>
                We invest in training our staff so you can expect the world's
                best at your doorstep on moving day.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 flex flex-col gap-y-9">
          <div className="flex flex-col py-3 px-4 gap-x-7 sm:flex-row">
            <div className="flex justify-center rounded-full">
              <img
                src="/experience.svg"
                alt="User Experience"
                className=" h-28 w-28"
              />
            </div>
            <div>
              <h1 className="my-3 font-bold text-xl">Experience</h1>
              <p>
                We invest in training our staff so you can expect the world's
                best at your doorstep on moving day.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-3 px-4 gap-x-7 sm:flex-row">
            <div className="flex justify-center rounded-full">
              <img
                src="/focus-point.svg"
                alt="User Experiance"
                className=" h-28 w-28"
              />
            </div>
            <div>
              <h1 className="my-3 font-bold text-xl">Focus On Customer</h1>
              <p>
                We invest in training our staff so you can expect the world's
                best at your doorstep on moving day.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 flex justify-center">
          <img src="/auto-image-carousel.jpg" alt="Safe Movers Staff" />
        </div>
      </div>
      ;
    </div>
  );
};

export default WhyChoose;
