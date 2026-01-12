import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Map, Star, Info, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import WorldGuide from './components/WorldGuide';
import CharacterGallery from './components/CharacterGallery';
import { CHARACTERS } from './constants';

enum Section {
  HERO = 'hero',
  WORLD = 'world',
  CHARACTERS = 'characters'
}

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HERO);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Section.HERO, label: 'Main', icon: Star },
    { id: Section.WORLD, label: 'World', icon: Map },
    { id: Section.CHARACTERS, label: 'Characters', icon: Users },
  ];

  const scrollToSection = (section: Section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
    // Simple hash navigation or scroll simulation if needed
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden relative selection:bg-amber-900 selection:text-amber-100">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-slate-900/50 to-slate-950 opacity-80" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(Section.HERO)}>
              <BookOpen className="h-6 w-6 text-amber-500" />
              <span className="font-display font-bold text-xl tracking-wider text-amber-50">Velcross Chronicles</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      currentSection === item.id
                        ? 'text-amber-400 bg-slate-800'
                        : 'text-slate-400 hover:text-amber-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        <section id={Section.HERO}>
          <Hero onExplore={() => scrollToSection(Section.WORLD)} />
        </section>

        <section id={Section.WORLD} className="py-20 bg-slate-950 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
          <WorldGuide />
        </section>

        <section id={Section.CHARACTERS} className="py-20 bg-slate-900/50 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
          <CharacterGallery characters={CHARACTERS} />
        </section>

        <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
          <p className="font-display">© 1726 Velcross Chronicles. All rights reserved.</p>
          <p className="mt-2 text-xs">A Romance Fantasy Simulation Experience</p>
        </footer>
      </main>
    </div>
  );
};

export default App;