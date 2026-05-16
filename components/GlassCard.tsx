import React from 'react';

interface GlassCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, description, children }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-white/10 dark:border-white/10 dark:bg-zinc-900/50">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition-all group-hover:bg-blue-500/30"></div>
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl transition-all group-hover:bg-purple-500/30"></div>

      <h3 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      {children}
    </div>
  );
};

export default GlassCard;
