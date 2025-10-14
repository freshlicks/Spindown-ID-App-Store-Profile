import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import FlutterIcon from './icons/FlutterIcon';
import TensorFlowIcon from './icons/TensorFlowIcon';

const PoweredBy: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section id="powered-by" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-700 ease-out ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] md:text-3xl font-semibold text-onSurface mb-4">Powered by Advanced Technology</h2>
            <p className="text-base font-normal text-onBackground">
              We use the best tools to build the best experience. Our app combines the beautiful, cross-platform UI of Flutter with the powerful, on-device machine learning capabilities of TensorFlow.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="flex flex-col items-center">
              <FlutterIcon className="h-20 w-20 md:h-24 md:w-24 text-blue-500" />
              <p className="mt-4 text-lg font-medium text-onBackground">Flutter</p>
            </div>
            <div className="text-4xl font-light text-gray-500">+</div>
            <div className="flex flex-col items-center">
              <TensorFlowIcon className="h-20 w-20 md:h-24 md:w-24 text-orange-500" />
              <p className="mt-4 text-lg font-medium text-onBackground">TensorFlow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;