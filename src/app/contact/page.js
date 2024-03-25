import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className="mx-5 sm:mx-24 flex flex-col">
      <h1 className="text-4xl text-gray-400 font-bold mb-3 my-7">Contact Us</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-20 gap-y-10">
        <div className="flex flex-col justify-center px-16 py-10 shadow-[#570598]/90 shadow-md">
          <div>
            <div className=" flex justify-center">
              <FaPhoneAlt fill="#570987" />
            </div>
            <h3 className="text-center font-bold text-lg">Call Us Today</h3>
            <p className="text-[#570987] text-center"> +254 71-362-2228</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-10 shadow-[#570598]/90 shadow-md">
          <div>
            <div className=" flex justify-center">
              <MdEmail fill="#570987" />
            </div>
            <h3 className="text-center font-bold text-lg">Email Us On</h3>
            <p className="text-[#570987] text-center"> move@safemovers.co.ke</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-10 shadow-[#570598]/90 shadow-md">
          <div>
            <div className=" flex justify-center">
              <FaLocationDot fill="#570987" />
            </div>
            <h3 className="text-center font-bold text-lg">Visit Us Today</h3>
            <p className="text-[#570987] text-center">
              {' '}
              Muringa Road, Kilimani, <br /> Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h1 className="text-4xl font-bold text-[#570598]">Write to Us</h1>
        <form className="mt-8 flex flex-col">
          <div className="flex flex-col sm:flex-row mb-12 gap-x-24">
            <div className="w-1/2 flex gap-y-12 flex-col">
              <input
                type="text"
                className="bg-gray-200 max-w-full mt-2 p-2 h-14 focus:outline-none focus:bg-white"
                placeholder="Name"
              />
              <input
                type="email"
                className="bg-gray-200 max-w-full mt-2 p-2 h-14 focus:outline-none focus:bg-white"
                placeholder="Email"
              />
              <input
                type="tel"
                className="bg-gray-200 max-w-full mt-2 p-2 h-14 focus:outline-none focus:bg-white"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-1/2 gap-y-12">
              <textarea
                className="bg-gray-200 max-w-full mt-2 p-2 focus:outline-none focus:bg-white"
                placeholder="Message"
                rows={5}
              />
              <div className="mt-4">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className="mr-2 border-black rounded text-[#570598] shadow-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor="terms-checkbox">
                  Agree to the terms and conditions of our Privacy Policy
                </label>
              </div>
            </div>
          </div>
          <button className="mt-4 bg-[#570598] text-white w-40 py-4 px-12 hover:bg-[#570987] focus:outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
