
import React from 'react';

const Curriculum: React.FC = () => {
  const items = [
    { 
      title: "학습 시스템 구축", 
      desc: "스스로 관리형 학원의 효과를 내는 법" 
    },
    { 
      title: "“뭘 들어야 할지 모르겠어요”", 
      desc: "나에게 맞는 인강, 컨텐츠 고르는 법" 
    },
    { 
      title: "시간관리 비법", 
      desc: "공부와 휴식을 모두 챙기도록 시간을 관리하는 법"
    },
    { 
      title: "뇌과학 기반 공부법", 
      desc: "적게 공부하고 시험 잘 보는 학생들의 비결" 
    },
    { 
      title: "학생 맞춤형 커리큘럼", 
      desc: "수능 상위 1% 선배와 함께하는 내신/수능 맞춤 커리 설계" 
    }
  ];


  return (
    <section id="curriculum" className="py-20 px-5 bg-slate-50 scroll-mt-16 md:scroll-mt-20 border-y border-slate-100/50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center text-slate-900">수업 계획표</h2>
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm">
              <span className="text-blue-600 font-bold text-sm">0{idx + 1}</span>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
