import LandingSection from '@/components/Hero/LandingSection';
import Link from 'next/link';

const ServicesDashboard = () => {
  return (
    <div>
      <section>
        <LandingSection />
      </section>
      <p className="mt-5 mx-5 sm:mx-24 font-bold text-xl">
        Our Pocket Friendly Prices
      </p>
      <h1 className="mt-5 mx-5 sm:mx-24 font-bold text-4xl text-[#570987]">
        Get Moving Today
      </h1>
      <section className="grid my-8 mx-5 sm:mx-24 grid-cols-1 sm:grid-cols-3 gap-6">
        <Link href="/residential">
          <img src="/residential-house.webp" alt="residential house movers" />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Residential House Mover in Kenya
          </p>
        </Link>
        <Link href="international-movers">
          <img src="/international-movers.jpg" alt="international movers" />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            International Mover in Kenya
          </p>
        </Link>
        <Link href="/coorporate-movers">
          <img
            src="/modern-office-design.webp"
            alt="Corporate and Office Movers in Kenya"
          />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Corporate and Office Movers in Kenya
          </p>
        </Link>
        <Link href="/cross-border-moving">
          <img
            src="/shipping.jpg"
            alt="Top Cross-Border Movers in East Africa"
          />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Top Cross-Border Movers in East Africa
          </p>
        </Link>
        <Link href="/storage">
          <img src="/storage.jpg" alt="Storage Services in Kenya" />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Storage Services in Kenya
          </p>
        </Link>
        <Link href="machinery-moving">
          <img src="/machinery-movers.jpg" alt="Machinery Movers in Kenya" />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Machinery Movers in Kenya
          </p>
        </Link>
        <Link href="/residential">
          <img
            src="/furniture-banner.webp"
            alt="Furniture Installation & Assembly Services in Kenya"
          />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Furniture Installation & Assembly Services in Kenya
          </p>
        </Link>
        <Link href="/safe-movers-shop">
          <img
            src="/large-box-1.png"
            alt="Packing & Moving Carton Boxes for Sale in Kenya"
          />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Packing & Moving Carton Boxes for Sale in Kenya
          </p>
        </Link>
        <Link href="/auto-relocation-service">
          <img
            src="/vehicle-shipping-oversea.jpg"
            alt="Vehicle Relocation in Kenya"
          />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Vehicle Relocation in Kenya
          </p>
        </Link>
        <Link href="/destination-services-in-kenya">
          <img
            src="/destination-services.jpeg"
            alt="Destination Services in Kenya"
          />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Destination Services in Kenya
          </p>
        </Link>
        <Link href="/fine-art-moving">
          <img src="/fine-art-moving.jpg" alt="Fine Art Movers in Kenya" />
          <p className="bg-[#570987] py-4 text-center font-bold text-white">
            Fine Art Movers in Kenya
          </p>
        </Link>
      </section>
    </div>
  );
};

export default ServicesDashboard;
