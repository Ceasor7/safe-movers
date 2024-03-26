import LandingSection from '@/components/Hero/LandingSection';
import WhyChoose from '@/components/Moving/WhyChoose';
import CompaniesServed from '@/components/Served/CompaniesServed';
import GetMoving from '@/components/Services/GetMoving';
import YoutubeVideo from '@/components/Youtube/YoutubeVideo';
import Membership from '@/sections/Membership';
import ReviewSection from '@/sections/ReviewSection';
import ServicesSection from '@/sections/ServicesSection';

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <section>
        <LandingSection />
      </section>
      <section>
        <ServicesSection />
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
        <WhyChoose />
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
