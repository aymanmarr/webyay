import React from 'react';
import { motion } from 'framer-motion';
import { Search } from '../shared/Search';
import { AboutPage } from '../../pages/About';
import {CustomCards} from '../CustomCards';

export const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://aujourdhui.ma/wp-content/uploads/2024/11/Ram-Royal-Air-Maroc-Boeing-787-9-Dreamliner.jpg?x13840")',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Unique experience with{' '}
              <span className="text-red-500">Royal Air Maroc</span>
            </h1>

            <p className="text-xl text-white max-w-2xl mx-auto">
              Your journey begins here. Find and book the perfect flight to your
              dream destination.
            </p>
          </motion.div>

          {/* Search Form Positioned */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute w-full max-w-4xl left-1/2 transform -translate-x-1/2 bottom-3"
          >
            <Search />
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black/70 py-8">
        <AboutPage />
      </div>

      {/* Custom Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Explore Our Beautiful Destinations
          </h2>
        </div>
        <CustomCards />
      </div>
    </div>
  );
};
