
import React from 'react';

interface HeaderProps {
  onApplyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-40 border-b border-slate-50">
      <div className="max-w-5xl mx-auto px-5 h-14 md:h-16 flex items-center justify-between">
        <div className="text-lg font-extrabold tracking-tighter text-slate-900">
          누누<span className="text-blue-600">코치</span>
        </div>
        <button 
          onClick={onApplyClick}
          className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold hover:bg-blue-700 transition-colors"
        >
          신청하기
        </button>
      </div>
    </header>
  );
};

export default Header;
