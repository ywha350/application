
import React from 'react';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-5">
      <div className="max-w-3xl mx-auto text-center">
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] mb-6">
          자기주도학습 코칭<br />
          <span className="text-blue-600">단 4시간</span>으로 끝내겠습니다<br />
        </h1>
        <p className="text-base md:text-lg text-slate-500 mb-6 leading-relaxed max-w-xl mx-auto font-medium">
          상위 1%의 공부법 핵심만 압축 전수합니다.<br /> <br /> 
        </p>

        {/* 환불 보장 문구 추가 */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-10 border border-blue-100 shadow-sm">
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          첫 수업 이후 학생 마음에 들지 않으면 전액 환불
        </div>

        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <button 
            onClick={onApplyClick}
            className="w-full bg-slate-900 text-white py-4 rounded-2xl text-base font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
          >
            무료 상담 신청하기
          </button>
          <a 
            href="#curriculum"
            className="w-full py-4 text-slate-400 text-sm font-bold hover:text-slate-600 transition-colors inline-block"
          >
            커리큘럼 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
