import { useState, useEffect, useRef } from 'react';

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

export default useInView;
