
import React from 'react';

interface FooterProps {
  onApplyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-5">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-xl font-black text-slate-900 mb-4 tracking-tighter">LEARNCORE</div>
        <p className="text-slate-400 text-xs leading-relaxed mb-8">
          상위 1%의 공부법으로 성적의 본질을 바꿉니다.
        </p>
        <button 
          onClick={onApplyClick}
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 mb-10"
        >
          지금 상담 신청하기
        </button>
      </div>
    </footer>
  );
};

export default Footer;
