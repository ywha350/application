
import React from 'react';

const ApplicationProcess: React.FC = () => {
  const steps = [
    { title: "상담 신청", desc: "간단 정보 입력 및 접수" },
    { title: "일정 확정", desc: "수업 시간/장소 개별 조율" },
    { title: "수준 진단", desc: "학생 맞춤형 성향 파악" },
    { title: "수업 진행", desc: "4시간 집중 코칭 시작" }
  ];

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-900">신청 절차</h2>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
                <p className="text-slate-400 text-xs mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
