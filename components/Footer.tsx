import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-onBackground">
        <p className="text-sm font-normal">
          &copy; {new Date().getFullYear()} Spindown ID. All rights reserved.
        </p>
        <p className="text-xs font-normal mt-2">
          The essential companion for your Magic: The Gathering dice collection.
        </p>
        <p className="text-xs font-normal text-gray-400 mt-4 max-w-3xl mx-auto">
          The literal and graphical information presented on this site about
          Magic: The Gathering, including dice images and mana symbols, is
          copyrighted by Wizards of the Coast, LLC. Spindown ID is not produced
          by or endorsed by Wizards of the Coast.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
