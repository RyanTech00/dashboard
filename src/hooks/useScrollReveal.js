import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll reveal animations using Intersection Observer
 * @param {string} animationClass - CSS animation class to apply (e.g., 'animate-fade-in-up')
 * @param {number} threshold - Percentage of element visibility to trigger animation (0-1)
 * @param {string} delay - Animation delay class (e.g., 'delay-100')
 * @returns {Object} ref - React ref to attach to the element
 */
export default function useScrollReveal(animationClass = 'animate-fade-in-up', threshold = 0.1, delay = '') {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add base scroll-reveal class
    element.classList.add('scroll-reveal');
    if (delay) {
      element.classList.add(delay);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible, trigger animation
            entry.target.classList.add('revealed', animationClass);
            // Optional: unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass, threshold, delay]);

  return elementRef;
}
