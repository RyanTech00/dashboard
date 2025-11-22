import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Wrapper component that adds scroll reveal animation to its children
 * @param {string} animation - Animation type (default: 'animate-fade-in-up')
 * @param {string} delay - Delay class (e.g., 'delay-100')
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Child elements
 */
export default function AnimatedCard({
  animation = 'animate-fade-in-up',
  delay = '',
  className = '',
  children
}) {
  const ref = useScrollReveal(animation, 0.1, delay);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
