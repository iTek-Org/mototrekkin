import React from 'react';

const Card = ({ img, title, desc, delay = 0 }) => (
  <div
    className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative h-64 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-70"></div>
    </div>
    <div className="p-8 text-center">
      <h3 className="text-xl tracking-widest text-gray-900 font-extrabold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const HireFeatureCards = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          img="/src/assets/hire/bh-landing-01.jpg"
          title="HIRE FOR EVENTS"
          desc="Hire your choice of motorcycle and join us on any of our off-road events. Available for weekend, or week-long events."
          delay={0}
        />
        <Card
          img="/src/assets/hire/bh-landing-02.jpg"
          title="HIRE FOR TRAINING"
          desc="If you've owned a road bike and want a new lease on life or want to improve your off-road skills to boost your confidence."
          delay={100}
        />
        <Card
          img="/src/assets/hire/hire-to-explore.webp"
          title="HIRE TO EXPLORE"
          desc="Ride in luxury and with plenty of power for one or two up, on any one of our BMW 1200 or 1250' BMW GS fleet."
          delay={200}
        />
      </div>
    </section>
  );
};

export default HireFeatureCards;
