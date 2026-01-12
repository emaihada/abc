import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Character } from '../types';
import CharacterModal from './CharacterModal';

interface CharacterGalleryProps {
  characters: Character[];
}

const CharacterGallery: React.FC<CharacterGalleryProps> = ({ characters }) => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-100 mb-4">
          Dramatis Personae
        </h2>
        <p className="text-slate-400 font-serif italic">The key figures of the Empire</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedChar(char)}
            className="group cursor-pointer bg-slate-800/40 rounded-lg overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:-translate-y-1"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-900 relative overflow-hidden">
               <img 
                 src="https://i.postimg.cc/63NLzg9v/jemog-eobs-eum.png" 
                 alt={char.name}
                 className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
               />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
               <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${char.colorTheme}-500 to-transparent opacity-50`} />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-sm bg-${char.colorTheme}-950/50 text-${char.colorTheme}-400 border border-${char.colorTheme}-900`}>
                  {char.role}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-200 group-hover:text-amber-100 transition-colors">
                {char.name}
              </h3>
              <p className="text-slate-500 text-sm mt-1 mb-4">{char.age}</p>
              
              <div className="flex flex-wrap gap-2">
                {char.traits.slice(0, 2).map((trait, i) => (
                  <span key={i} className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded">
                    #{trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CharacterModal 
        character={selectedChar} 
        isOpen={!!selectedChar} 
        onClose={() => setSelectedChar(null)} 
      />
    </div>
  );
};

export default CharacterGallery;