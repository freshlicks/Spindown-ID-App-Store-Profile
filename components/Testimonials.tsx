import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const testimonials = [
  {
    name: 'Jenna R.',
    role: 'LGS Owner',
    avatar: 'https://picsum.photos/100/100?random=18',
    quote: 'Spindown ID is a game-changer for pricing and trading dice at the store. Customers love being able to quickly identify what they have.',
  },
  {
    name: 'Marcus "The Commander Guy" T.',
    role: 'Veteran Player',
    avatar: 'https://picsum.photos/100/100?random=19',
    quote: 'I found a box of old dice and had no idea what sets they were from. This app identified them all in minutes. Finally completed my Theros collection!',
  },
  {
    name: 'Chloe S.',
    role: 'Collector & Trader',
    avatar: 'https://picsum.photos/100/100?random=20',
    quote: 'The wishlist and trade list features are amazing. It makes coordinating trades with my playgroup so much easier. An essential app for any serious collector.',
  },
];

const TestimonialCard: React.FC<{ name: string; role: string; avatar: string; quote: string; index: number }> = ({ name, role, avatar, quote, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`bg-surface p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col h-full transition-all duration-700 ease-out ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="text-sm font-normal text-onBackground italic flex-grow mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-medium text-base text-onSurface">{name}</p>
          <p className="text-sm font-normal text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ease-out ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-[28px] md:text-3xl font-semibold text-onSurface mb-4">Trusted by Players & Collectors</h2>
          <p className="text-base font-normal text-onBackground">Our app is the go-to choice for thousands of Magic: The Gathering players around the world.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;