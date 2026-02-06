
import React from 'react';

interface PricingProps {
  onApplyClick: (type: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onApplyClick }) => {
  return (
    <section className="py-20 px-5 bg-slate-50 border-y border-slate-100/50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-900">수업 형태</h2>
        <div className="space-y-4">
          {/* 온라인 코칭 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-100 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-slate-800">온라인 코칭</h3>
              <p className="text-xs text-slate-400 mt-1">4시간</p>
            </div>
            <div className="text-right">
              <div className="font-black text-lg text-slate-900">89,000원</div>
              <button 
                onClick={() => onApplyClick('온라인 단기 과외')} 
                className="text-blue-600 text-xs font-bold mt-1 px-2 py-1 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100"
              >
                신청하기
              </button>
            </div>
          </div>
          
          {/* 대면 코칭 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-100 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-slate-800">대면 코칭 (경기 고양시 한정)</h3>
              <p className="text-xs text-slate-400 mt-1">4시간 + 전용 교재 제공</p>
            </div>
            <div className="text-right">
              <div className="font-black text-lg text-slate-900">99,000원</div>
              <button 
                onClick={() => onApplyClick('대면 단기 과외')} 
                className="text-blue-600 text-xs font-bold mt-1 px-2 py-1 hover:bg-blue-50 rounded-lg transition-colors border border-blue-100"
              >
                신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
