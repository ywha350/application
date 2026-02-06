
import React from 'react';

const TargetAudience: React.FC = () => {
  const targets = [
    "계획은 세우지만 실행이 안 되는 학생",
    "내신과 수능을 동시에 잡고 싶은 학생",
    "공부 시간을 효율적으로 쓰고 싶은 학생",
    "단기간에 공부 구조를 정리하고 싶은 학생"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900">이런 학생에게 추천합니다</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {targets.map((text, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-8 h-8 flex-shrink-0 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="font-semibold text-slate-700">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
