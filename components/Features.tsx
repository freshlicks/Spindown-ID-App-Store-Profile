import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import CameraIdentificationIcon from "./icons/CameraIdentificationIcon";
import CollectionTrackerIcon from "./icons/CollectionTrackerIcon";
import SetDatabaseIcon from "./icons/SetDatabaseIcon";
import WishlistTradesIcon from "./icons/WishlistTradesIcon";
import DieInfoIcon from "./icons/DieInfoIcon";
import ManualEntryIcon from "./icons/ManualEntryIcon";

const features = [
  {
    icon: CameraIdentificationIcon,
    title: "Camera Identification",
    description:
      "Point your camera at any spindown die and instantly find out its set, symbol, and release date.",
  },
  {
    icon: CollectionTrackerIcon,
    title: "Complete Collection Tracker",
    description:
      "Log every die you own. Organize your collection by set, color, or rarity and never buy duplicates again.",
  },
  {
    icon: SetDatabaseIcon,
    title: "Expansive Set Database",
    description:
      "Browse a comprehensive database of every Magic: The Gathering set that includes a spindown die.",
  },
  {
    icon: WishlistTradesIcon,
    title: "Wishlist & Trade List",
    description:
      "Track the dice you're hunting for with a personal wishlist and manage duplicates with a dedicated trade list.",
  },
  {
    icon: DieInfoIcon,
    title: "Detailed Die Information",
    description:
      "Get high-resolution images, see the unique set symbol, and learn interesting facts about each die.",
  },
  {
    icon: ManualEntryIcon,
    title: "Manual Entry Mode",
    description:
      "Camera can't identify a rare or unusual die? No problem. Manually enter the details to keep your collection complete.",
  },
];

const FeatureCard: React.FC<{
  icon: React.FC;
  title: string;
  description: string;
  index: number;
}> = ({ icon: Icon, title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`bg-surface p-6 rounded-xl border border-gray-700 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-700 ease-out ${
        onScreen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <div>
          <h3 className="text-[22px] font-medium text-onSurface mb-2">
            {title}
          </h3>
          <p className="text-sm font-normal text-onBackground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ease-out ${
            onScreen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-[28px] md:text-3xl font-semibold text-onSurface mb-4">
            The Ultimate Collector's Tool
          </h2>
          <p className="text-base font-normal text-onBackground">
            Everything you need to manage and grow your Magic: The Gathering
            dice collection.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
