import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-medium text-onSurface">
          <span className="text-primary font-semibold">Spindown</span>ID
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-sm font-normal text-onBackground hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-sm font-normal text-onBackground hover:text-primary transition-colors">Testimonials</a>
          <a href="#showcase" className="text-sm font-normal text-onBackground hover:text-primary transition-colors">Showcase</a>
          <a href="#powered-by" className="text-sm font-normal text-onBackground hover:text-primary transition-colors">Technology</a>
        </nav>
        <a 
          href="#cta" 
          className="bg-primary text-onPrimary text-sm font-semibold tracking-wider px-5 py-2 rounded-lg hover:bg-primaryVariant transition-transform transform hover:scale-105"
        >
          Download Now
        </a>
      </div>
    </header>
  );
};

export default Header;