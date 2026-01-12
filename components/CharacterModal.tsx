import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Heart, Activity } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { Character } from '../types';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, isOpen, onClose }) => {
  if (!character) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-y-auto overflow-x-hidden custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Banner */}
            <div className={`h-32 bg-gradient-to-r from-slate-900 to-${character.colorTheme}-950/50 relative border-b border-slate-800`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900/50 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="absolute -bottom-10 left-8 md:left-12 flex items-end">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-lg border-4 border-slate-900 shadow-xl flex items-center justify-center overflow-hidden relative">
                    <img 
                        src="https://i.postimg.cc/63NLzg9v/jemog-eobs-eum.png" 
                        alt={character.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="ml-6 mb-12 md:mb-14">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-md">
                        {character.name}
                    </h2>
                    <p className={`text-${character.colorTheme}-400 font-medium tracking-wide uppercase`}>
                        {character.role}
                    </p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="mt-12 px-8 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Description */}
                <div>
                  <h3 className="text-xl font-display text-slate-200 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-amber-500" />
                    Introduction
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg font-serif">
                    {character.description}
                  </p>
                </div>

                {/* Profile Grid */}
                <div>
                   <h3 className="text-xl font-display text-slate-200 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-amber-500" />
                    Profile
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <ProfileItem label="Age" value={character.age} />
                    <ProfileItem label="Gender" value={character.gender} />
                    <ProfileItem label="Height" value={character.height} />
                    <ProfileItem label="MBTI" value={character.mbti} />
                    <ProfileItem label="Enneagram" value={character.enneagram} />
                    <ProfileItem label="Appearance" value={character.appearance} fullWidth />
                  </div>
                </div>

                {/* Tags */}
                <div>
                   <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-3">Key Traits</h3>
                   <div className="flex flex-wrap gap-2">
                    {character.traits.map(trait => (
                        <span key={trait} className={`px-3 py-1 bg-${character.colorTheme}-950/30 text-${character.colorTheme}-300 border border-${character.colorTheme}-900/50 rounded-full text-sm`}>
                            {trait}
                        </span>
                    ))}
                   </div>
                </div>
              </div>

              {/* Right Column: Stats Chart */}
              <div className="lg:col-span-1 bg-slate-950/50 rounded-xl border border-slate-800 p-6 flex flex-col items-center">
                <h3 className="text-lg font-display text-slate-300 mb-6 flex items-center gap-2 w-full">
                  <Activity className="w-4 h-4 text-amber-500" />
                  Personality Analysis
                </h3>
                <div className="w-full h-[300px] text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={character.stats}>
                      <PolarGrid stroke="#334155" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#94a3b8', fontSize: 11 }} 
                      />
                      <Radar
                        name="Personality"
                        dataKey="A"
                        stroke="#fbbf24" 
                        strokeWidth={2}
                        fill="#f59e0b"
                        fillOpacity={0.4}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#e2e8f0' }}
                        itemStyle={{ color: '#fbbf24' }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-4 text-slate-500 text-xs italic">
                  * Values based on relative dominance
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProfileItem = ({ label, value, fullWidth = false }: { label: string, value: string, fullWidth?: boolean }) => (
  <div className={`bg-slate-800/50 p-3 rounded border border-slate-700/50 ${fullWidth ? 'col-span-full' : ''}`}>
    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-slate-200 font-medium">{value}</div>
  </div>
);

export default CharacterModal;