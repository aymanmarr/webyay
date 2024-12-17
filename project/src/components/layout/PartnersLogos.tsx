import React, { useEffect, useRef } from 'react';

const logos = [
  { src: 'https://w7.pngwing.com/pngs/448/271/png-transparent-royal-air-maroc-hd-logo-thumbnail.png', alt: 'Logo 1' },
  { src: 'https://freelogopng.com/images/all_img/1659783327rolex-logo-png.png', alt: 'Logo 2' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Qatar_Airways_Logo.png/1200px-Qatar_Airways_Logo.png', alt: 'Logo 4' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Qatar_Airways_Logo.png/1200px-Qatar_Airways_Logo.png', alt: 'Logo 5' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Qatar_Airways_Logo.png/1200px-Qatar_Airways_Logo.png', alt: 'Logo 6' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Qatar_Airways_Logo.png/1200px-Qatar_Airways_Logo.png', alt: 'Logo 7' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Qatar_Airways_Logo.png/1200px-Qatar_Airways_Logo.png', alt: 'Logo 8' },
  { src: 'https://www.quarkevents.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FV.45d18ab1.png&w=640&q=75', alt: 'Logo 9' },
  { src: 'https://www.quarkevents.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FV.45d18ab1.png&w=640&q=75', alt: 'Logo 10' },
];

const PartnerLogos: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let animationFrame: number;
      let scrollPosition = 0;

      const step = () => {
        scrollPosition += 0.7;
        if (scrollPosition >= marquee.scrollWidth / 2) {
          scrollPosition = 0;
        }
        marquee.style.transform = `translateX(-${scrollPosition}px)`;
        animationFrame = requestAnimationFrame(step);
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, []);

  return (
    <div className="bg-slate-950 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Partners
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            style={{ willChange: 'transform' }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 mx-6">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
