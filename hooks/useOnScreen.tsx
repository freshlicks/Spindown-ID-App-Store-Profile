import React, { useState, useEffect, RefObject } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>, triggerOnce: boolean = true) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Ensure IntersectionObserver is available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIntersecting(true); // Fallback for SSR or older browsers
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else {
        if (!triggerOnce) {
          setIntersecting(false);
        }
      }
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, triggerOnce]);

  return isIntersecting;
};