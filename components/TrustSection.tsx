
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-slate-50 border-y border-slate-100/50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
          ”대학생 과외를 믿을 수 있을까?“
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
          대학을 입학한지 얼마 안 된 학생이 제대로 된 실력이 있을지, 프로정신 없이 단순 용돈 벌이 용으로 하는 것은 아닌지 걱정되는 분들이 많을 것입니다. 그렇기에 저는 수강생 분들께 부담이 되지 않도록 <span className="text-blue-600 font-bold">단 2회 수업으로 모든 노하우를 전수</span>하고, <span className="text-blue-600 font-bold">첫 수업 이후 마음에 들지 않을 시 100% 환불</span>해드리는 정책을 시행하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
