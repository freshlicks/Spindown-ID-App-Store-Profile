import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import AppleStoreIcon from './icons/AppleStoreIcon';
import GooglePlayIcon from './icons/GooglePlayIcon';

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

const CTA: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section id="cta" className="py-20 bg-surface">
      <div 
        ref={ref}
        className={`container mx-auto px-6 text-center transition-all duration-700 ease-out ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-[28px] md:text-3xl font-semibold text-onSurface mb-4">
          Start Your Collection Today.
        </h2>
        <p className="text-base font-normal text-onBackground max-w-2xl mx-auto mb-10">
          Download Spindown ID and take your Magic: The Gathering collection to the next level. Free on iOS and Android.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <DownloadButton store="apple" />
          <DownloadButton store="google" />
        </div>
      </div>
    </section>
  );
};

export default CTA;