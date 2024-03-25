import LandingSection from '@/components/Hero/LandingSection';
import MovingWithUs from '@/components/Moving/MovingWithUs';
import CompaniesServed from '@/components/Served/CompaniesServed';
import GetMoving from '@/components/Services/GetMoving';
import YoutubeVideo from '@/components/Youtube/YoutubeVideo';
import Membership from '@/sections/Membership';
import ReviewSection from '@/sections/ReviewSection';
import ServicesCarousel from '@/sections/ServicesCarousel';

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <section>
        <LandingSection />
      </section>
      <section>
        <ServicesCarousel />
      </section>
      <section>
        <ReviewSection />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>
        <CompaniesServed />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>
        <MovingWithUs />
      </section>
      <section>
        <YoutubeVideo />
      </section>
      <hr className="border-black mx-5 sm:mx-24" />
      <section>
        <GetMoving />
      </section>
      <section>
        <Membership />
      </section>
    </main>
  );
}
