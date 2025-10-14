import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Showcase: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section id="showcase" className="py-20 bg-surface">
      <div className="container mx-auto px-6 text-center">
        <div 
          ref={ref}
          className={`transition-all duration-700 ease-out ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-[28px] md:text-3xl font-semibold text-onSurface mb-4">Identify Your Way.</h2>
          <p className="text-base font-normal text-onBackground max-w-2xl mx-auto mb-12">
            Our clean interface makes it effortless to manage your collection, whether you're scanning a new find with your camera or manually adding the details yourself.
          </p>
        </div>
        <div className={`flex justify-center transition-all duration-700 ease-out delay-200 ${onScreen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
           <div className="relative w-full max-w-4xl p-4 bg-background rounded-2xl shadow-2xl">
              <div className="absolute top-4 left-6 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <img 
                  src="https://picsum.photos/1200/700?random=45" 
                  alt="App Showcase" 
                  className="w-full h-auto object-cover rounded-lg"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;