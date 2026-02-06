
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "계획은 세우지만 실행은 제로",
      desc: "매일 세우는 계획, 지키지 못해 쌓이는 자책감을 멈추고 싶다면"
    },
    {
      title: "공부 효율이 나지 않는 시간",
      desc: "책상 앞에는 오래 앉아있지만, 머릿속에 남는 게 없어 고민이라면"
    },
    {
      title: "내신과 수능 사이의 혼란",
      desc: "두 마리 토끼를 잡으려다 모두 놓치고 있는 수험생이라면"
    }
  ];

  return (
    <section className="py-16 px-5 border-t border-slate-50">
      <div className="max-w-xl mx-auto">
        <div className="space-y-4">
          {problems.map((p, idx) => (
            <div key={idx} className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100 flex gap-4 items-start">
              <span className="text-blue-600 font-black text-lg">!</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-slate-400 text-sm italic">
          "의지의 문제가 아닌 <span className="text-slate-900 font-bold">방법의 차이</span>입니다."
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
