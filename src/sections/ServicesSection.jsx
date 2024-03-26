import GetMoving from '@/components/Services/GetMoving';
import ServicesCard from '@/components/Services/ServicesCard';

const servicesCards = [
  {
    image: '/auto-image-carousel.jpg',
    title: 'Residential House Movers',
    description:
      'At Safe Movers, we understand that moving to a new residence can be a complex and daunting task. Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
    link: 'Learn More',
  },
  {
    image: '/auto-image-carousel.jpg',
    title: 'Residential House Movers',
    description:
      'At Safe Movers, we understand that moving to a new residence can be a complex and daunting task. Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
    link: 'Learn More',
  },
  {
    image: '/auto-image-carousel.jpg',
    title: 'Residential House Movers',
    description:
      'At Safe Movers, we understand that moving to a new residence can be a complex and daunting task. Our mission is to alleviate the stress and hassle of relocating by providing comprehensive and reliable residential house moving services across Kenya.',
    link: 'Learn More',
  },
];

const ServicesSection = () => {
  return (
    <div className=" bg-gray-300 py-14">
      <h1 className="mx-5 sm:mx-24 my-4 font-bold text-4xl tracking-widest text-center underline decoration-dashed underline-offset-8">
        Our Services
      </h1>
      <p className="mx-5 sm:mx-24 my-4">
        Discover the SafeMovers Academy, where movers are trained using a
        comprehensive curriculum. Our movers are certified with over 70 skills,
        delivering true value to clients while upholding the moving industry’s
        name. The academy serves as our knowledge hub, providing continuous
        training for all employees. At SafeMovers, everyone is a mover, and
        going through the academy is a way of life, creating empowered
        individuals even beyond the moving industry.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 mx-5 my-3 sm:mx-24">
        {servicesCards.map((servicesCard, index) => (
          <ServicesCard key={index} {...servicesCard} />
        ))}
      </div>
      <section className="my-7">
        <GetMoving />
      </section>
    </div>
  );
};

export default ServicesSection;
