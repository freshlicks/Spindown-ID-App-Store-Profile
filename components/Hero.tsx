import React, { useState, useEffect } from 'react';
import AppleStoreIcon from './icons/AppleStoreIcon';
import GooglePlayIcon from './icons/GooglePlayIcon';
import D20Icon from './icons/D20Icon';

const DownloadButton: React.FC<{ store: 'apple' | 'google' }> = ({ store }) => {
  const isApple = store === 'apple';

  const baseClasses = "group flex items-center justify-center rounded-lg px-4 py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg";
  const appleClasses = "bg-primary text-onPrimary hover:bg-primaryVariant";
  const googleClasses = "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-onPrimary";

  return (
    <a href="#" className={`${baseClasses} ${isApple ? appleClasses : googleClasses}`}>
      {isApple ? <AppleStoreIcon className="text-onPrimary" /> : <GooglePlayIcon />}
      <div className="ml-3 text-left">
        <div className="text-xs font-normal tracking-wide">{isApple ? 'Download on the' : 'Get it on'}</div>
        <div className="text-lg font-semibold -mt-1">{isApple ? 'App Store' : 'Google Play'}</div>
      </div>
    </a>
  );
};

const AnimatedDie: React.FC<{ icon: React.FC<{className?: string}>, position: string, size: string, animation: string, delay: string, opacity: string }> = ({ icon: Icon, position, size, animation, delay, opacity }) => {
  return (
    <div className={`absolute ${position} ${size} ${opacity} ${animation}`} style={{ animationDelay: delay }}>
      <Icon className={`w-full h-full fill-primary`} />
    </div>
  );
};

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClasses = (delay: string) => 
    `transition-all duration-700 ease-out ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;

  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedDie icon={D20Icon} position="top-1/4 left-1/4" size="w-24 h-24" animation="animate-float" delay="0s" opacity="opacity-50" />
        <AnimatedDie icon={D20Icon} position="top-1/2 right-1/4" size="w-16 h-16" animation="animate-float-reverse" delay="-5s" opacity="opacity-30" />
        <AnimatedDie icon={D20Icon} position="bottom-1/4 left-1/3" size="w-12 h-12" animation="animate-float" delay="-8s" opacity="opacity-40" />
        <AnimatedDie icon={D20Icon} position="top-3/4 right-1/3" size="w-20 h-20" animation="animate-float-reverse" delay="-12s" opacity="opacity-30" />
        <AnimatedDie icon={D20Icon} position="top-10 right-1/2" size="w-8 h-8" animation="animate-float" delay="-2s" opacity="opacity-50" />
      </div>
      <div className="container mx-auto px-6 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-[57px] font-extrabold text-onSurface leading-tight mb-6 ${animationClasses('')}`}>
            Instantly Identify Your Spindown Dice.
          </h1>
          <p className={`text-base font-normal text-onBackground mb-10 ${animationClasses('delay-200')}`}>
            The essential companion for Magic: The Gathering players. Use your camera to identify any spindown die, add it manually if needed, track your collection, and browse a complete set database.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 ${animationClasses('delay-300')}`}>
            <DownloadButton store="apple" />
            <DownloadButton store="google" />
          </div>
        </div>
        <div className="relative mt-12 flex justify-center items-center z-10">
          <img 
            src="https://picsum.photos/300/600?random=50" 
            alt="App Screenshot" 
            className={`w-auto h-[500px] object-cover rounded-[40px] shadow-2xl ring-8 ring-surface/50 transform rotate-3 ${animationClasses('delay-500')}`}
          />
          <img 
            src="https://picsum.photos/300/600?random=51" 
            alt="App Screenshot" 
            className={`w-auto h-[500px] object-cover rounded-[40px] shadow-2xl ring-8 ring-surface/50 transform -rotate-3 z-10 ${animationClasses('delay-700')}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;