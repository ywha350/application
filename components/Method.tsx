
import React from 'react';

const Method: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900">수업 방식</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-2xl bg-blue-50/30 shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">단기 집중형</h3>
            <p className="text-slate-600 text-sm">군더더기 없이 실전 노하우만 압축하여 전달합니다.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-2xl bg-blue-50/30 shadow-sm">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">총 4시간, 2회</h3>
            <p className="text-slate-600 text-sm">학생의 적응을 위해 2회로 나누어 핵심을 완벽히 흡수시킵니다.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-2xl bg-blue-50/30 shadow-sm">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">1주일 완결</h3>
            <p className="text-slate-600 text-sm">오랜 기간 끌지 않습니다. 일주일 이내에 공부 체질을 바꿉니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
