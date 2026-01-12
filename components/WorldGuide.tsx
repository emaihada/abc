import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Sword, Sparkles } from 'lucide-react';
import { WORLD_LORE } from '../constants';

const WorldGuide: React.FC = () => {
  const icons = [Scroll, Sword, Sparkles];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-100 mb-4">
          The Worldview
        </h2>
        <div className="w-24 h-1 bg-amber-500/50 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {WORLD_LORE.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-sm hover:border-amber-900/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-slate-800/20 group-hover:text-amber-900/10 transition-colors">
                <Icon size={120} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display text-amber-200 mb-6 flex items-center gap-3">
                  <Icon className="w-6 h-6 text-amber-500" />
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.content.map((line, i) => (
                    <li key={i} className="text-slate-400 leading-relaxed pl-4 border-l border-slate-700">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorldGuide;