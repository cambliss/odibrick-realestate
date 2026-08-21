import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import happyHomeowner1 from '../../images/Happy Homeowners_1.jpg';
import happyHomeowner2 from '../../images/Happy Homeowners_2.jpg';
import happyHomeowner3 from '../../images/Team section.jpg';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = React.useState('');
  const [searchType, setSearchType] = React.useState('');
  const [searchPurpose, setSearchPurpose] = React.useState('buy');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation) params.set('location', searchLocation);
    if (searchType) params.set('type', searchType);
    if (searchPurpose) params.set('availability', searchPurpose);
    navigate(`/properties?${params.toString()}`);
  };

  const prefersReducedMotion = useReducedMotion();
  const propertyImages = [
    happyHomeowner1,
    happyHomeowner2,
    happyHomeowner3,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative bg-[#F8F6F6] pt-20 pb-32 overflow-hidden">
      {/* Background City Sketch Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F6] via-transparent to-[#F8F6F6]/50" />
      </div>

      {/* Background decorative blurs */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute right-0 top-14 w-64 h-64 bg-[rgba(0, 74, 173, 0.1)] rounded-full blur-[32px]"
      />
      <motion.div
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          delay: 1,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute left-[738px] bottom-22 w-64 h-64 bg-[rgba(254,215,170,0.2)] rounded-full blur-[32px]"
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-[rgba(0, 74, 173, 0.1)] border border-[rgba(0, 74, 173, 0.2)] rounded-full px-4 py-2 mb-10">
              <div className="w-2 h-2 bg-[#004AAD] rounded-full" />
              <span className="font-manrope font-bold text-xs text-[#004AAD] uppercase tracking-wider">
                Premium Real Estate Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 data-speakable variants={itemVariants} className="font-fraunces text-[56px] lg:text-[70px] leading-[1.1] text-[#111827] mb-8">
              Discover Your<br />
              <span className="italic text-[#004AAD]">Dream Home</span> with<br />
              Odibrick
            </motion.h1>

            {/* Description */}
            <motion.p data-speakable variants={itemVariants} className="font-manrope font-light text-xl leading-7 text-[#4b5563] mb-12 max-w-[676px]">
              Find flats, villas, and apartments in Hyderabad, Mumbai, Delhi, Bangalore, Ahmedabad, and Pune.
              Odibrick uses smart property matching tools and live market analysis to match you with the right property.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link to="/properties" className="bg-[#004AAD] text-white font-manrope font-bold text-lg px-8 py-4 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0, 74, 173, 0.25),0px_4px_6px_-4px_rgba(0, 74, 173, 0.25)] hover:bg-[#003B8B] transition-all hover:shadow-xl inline-flex items-center">
                Explore Properties
                <span className="font-material-icons text-sm ml-2" aria-hidden="true">arrow_forward</span>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src={propertyImages[0]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                <img src={propertyImages[1]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                <img src={propertyImages[2]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                <div className="w-10 h-10 bg-[#111827] rounded-full border-2 border-[#f8f6f6] flex items-center justify-center">
                  <span className="font-manrope font-bold text-xs text-white">+2k</span>
                </div>
              </div>
              <span className="font-manrope text-sm text-[#6b7280]">
                Join 2,000+ happy homeowners
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Search Widget Card */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="w-full max-w-[480px] bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-6">
                <h2 className="font-fraunces text-2xl font-bold text-[#111827] mb-2">Find Your Home</h2>
                <p className="font-manrope text-sm text-[#6B7280]">Select your preferences to browse matching listings.</p>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-5">
                {/* Purpose (Buy / Rent) Toggle */}
                <div>
                  <label className="block font-manrope text-xs font-bold text-[#374151] uppercase tracking-wider mb-2">I want to</label>
                  <div className="grid grid-cols-2 gap-2 bg-[#F8FAFC] p-1.5 rounded-xl border border-[#E2E8F0]">
                    <button
                      type="button"
                      onClick={() => setSearchPurpose('buy')}
                      className={`py-2 rounded-lg font-manrope text-sm font-semibold transition-all ${
                        searchPurpose === 'buy'
                          ? 'bg-[#004AAD] text-white shadow-sm'
                          : 'text-[#4B5563] hover:text-[#004AAD]'
                      }`}
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      onClick={() => setSearchPurpose('rent')}
                      className={`py-2 rounded-lg font-manrope text-sm font-semibold transition-all ${
                        searchPurpose === 'rent'
                          ? 'bg-[#004AAD] text-white shadow-sm'
                          : 'text-[#4B5563] hover:text-[#004AAD]'
                      }`}
                    >
                      Rent
                    </button>
                  </div>
                </div>

                {/* Location Select */}
                <div>
                  <label htmlFor="search-location" className="block font-manrope text-xs font-bold text-[#374151] uppercase tracking-wider mb-2">Location</label>
                  <select
                    id="search-location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] bg-white font-manrope text-sm text-[#1F2937] outline-none focus:border-[#004AAD] transition-colors"
                  >
                    <option value="">Any Location</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>

                {/* Property Type Select */}
                <div>
                  <label htmlFor="search-type" className="block font-manrope text-xs font-bold text-[#374151] uppercase tracking-wider mb-2">Property Type</label>
                  <select
                    id="search-type"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-[#E2E8F0] bg-white font-manrope text-sm text-[#1F2937] outline-none focus:border-[#004AAD] transition-colors"
                  >
                    <option value="">Any Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="House">House</option>
                    <option value="Office">Office</option>
                  </select>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-[#004AAD] text-white font-manrope font-bold text-base rounded-xl hover:bg-[#003B8B] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span className="material-icons text-xl">search</span>
                  Search Properties
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
