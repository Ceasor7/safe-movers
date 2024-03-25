import Link from 'next/link';

const OtherServices = () => {
  return (
    <div className="flex-col hidden sm:inline-flex justify-center ">
      <p className="text-center font-bold text-lg">Other Services</p>
      <div className="text-[#570987] text-center rounded-xl shadow-xl bg-gray-50">
        <div className="py-3">
          <Link href="#">Residential House Movers in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">International Movers in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Corporate and Office Moving Services in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Top Cross-Border Movers in East Africa</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Storage Facilities in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Machinery Movers in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">
            Furniture Installation & Assembly Services in Kenya
          </Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Packing & Moving Carton Boxes for Sale in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Vehicle Relocation in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Destination Services in Kenya</Link>
        </div>
        <hr className=" border-gray-600" />
        <div className="py-3">
          <Link href="#">Fine Art Movers in Kenya</Link>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
