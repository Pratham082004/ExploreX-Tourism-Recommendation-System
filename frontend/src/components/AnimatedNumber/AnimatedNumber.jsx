import { useState, useEffect, useRef } from 'react';

/**
 * A component that animates a number counting up to a target value.
 * Perfect for showing statistics or metrics with a nice visual effect.
 *
 * @param {number} end - The target number to count up to.
 * @param {number} [duration=2000] - How long the animation should take in milliseconds.
 * @param {string} [suffix=''] - Text to append after the number (like '%', 'k').
 * @param {string} [prefix=''] - Text to prepend before the number (like '$').
 * @param {number} [decimals=0] - Number of decimal places to show.
 */
function AnimatedNumber({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime = null;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            setCount(easeOutQuad * end);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasAnimated]);

    return (
        <span ref={elementRef}>
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default AnimatedNumber;
