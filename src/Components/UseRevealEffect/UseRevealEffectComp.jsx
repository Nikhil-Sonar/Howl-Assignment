// useRevealEffect.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useRevealEffect = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    const onScroll = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          { opacity: 2, y: 0, duration: 5, ease: 'power2.out' }
        );
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return ref;
};

export default useRevealEffect;