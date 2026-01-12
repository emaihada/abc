import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-slate-950">
         {/* Placeholder for a grand palace background - using a dark abstract gradient for now to keep it generated */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-950 to-slate-950" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-amber-500/80 font-display text-lg md:text-xl tracking-[0.2em] mb-4 uppercase">
            1726 Imperial Era
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-400 drop-shadow-lg mb-6">
            Velcross<br />Chronicles
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-serif italic max-w-2xl mx-auto leading-relaxed mb-10">
            "In a world where magic whispers and empires rise, <br className="hidden md:block"/> 
            destiny is woven by the threads of power and love."
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          onClick={onExplore}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-amber-500/30 text-amber-100 rounded-sm overflow-hidden transition-all hover:border-amber-500 hover:bg-amber-950/30"
        >
          <span className="font-display tracking-widest uppercase text-sm">Enter the World</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-amber-400" />
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-px h-32 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden md:block" />
      <div className="absolute top-1/2 right-4 w-px h-32 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden md:block" />
    </div>
  );
};

export default Hero;