
import React from 'react';

const TutorProfile: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, type: 'profile' | 'susi' | 'suneung') => {
    const target = e.currentTarget;
    if (type === 'profile') {
      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
    } else if (type === 'susi') {
      target.src = 'https://placehold.jp/24/3b82f6/ffffff/800x600.png?text=합격증 이미지 업로드 예정';
    } else if (type === 'suneung') {
      target.src = 'https://placehold.jp/24/3b82f6/ffffff/800x400.png?text=성적표 이미지 업로드 예정';
    }
  };

  const susiImages = [
    'grades/susi1.jpg',
    'grades/susi2.jpg',
    'grades/susi3.jpg'
  ];

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-slate-500 text-sm">한의예과 다수 합격 및 수능 고득점으로 증명된 시스템</p>
        </div>
        
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm overflow-hidden">
          <div className="text-center mb-10">
            <div className="aspect-square w-24 h-24 bg-white rounded-2xl overflow-hidden mx-auto mb-4 border border-slate-100 flex items-center justify-center shadow-inner">
               <img 
                 src="profile.jpg" 
                 alt="강사 이미지" 
                 onError={(e) => handleImgError(e, 'profile')}
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
               />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900">2026학년도 경희대·가천대·동국대 한의예과 합격</h3>
              <p className="text-blue-600 text-sm font-bold">26 수능 전과목 고득점 (11121)</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-4 -mx-2 px-2">
                {susiImages.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 w-[85%] snap-center rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-white flex items-center justify-center min-h-[200px]"
                  >
                    <img 
                      src={src} 
                      alt={`수시 합격 증명 ${idx + 1}`} 
                      onError={(e) => handleImgError(e, 'susi')}
                      className="w-full h-auto block" 
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-white flex items-center justify-center mx-1 min-h-[150px]">
                <img 
                  src="grades/suneung.jpg" 
                  alt="수능 성적 증명" 
                  onError={(e) => handleImgError(e, 'suneung')}
                  className="w-full h-auto block" 
                />
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-100">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                내신과 수능을 모두 챙기는 학생은 매우 적습니다. <br className="hidden md:block" />
                하지만 저는 공부법을 일찍 확립하여 항상 상위권 성적을 유지했습니다. <br className="hidden md:block" />
                <span className="text-slate-900 font-bold">그 비법을 빠짐없이 전해드립니다.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorProfile;
