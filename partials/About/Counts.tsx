import React, { useEffect, useState } from 'react';

type CountsProps = {
    value: string;
    text: string;
    class: string;
};

export default function Counts({ value, text, class: className }: CountsProps) {
    const [count, setCount] = useState<string>('');
    useEffect(() => {
        const endVal = Number(value.replace(/\D/g, ''));
        const suffix = value.replace(/\W|\d/g, '');
        let currentVal = 0;

        const updateCount = () => {
            currentVal += 1;
            if (currentVal <= endVal) {
                setCount(currentVal + suffix);
                requestAnimationFrame(updateCount);
            }
        };

        // Start the animation
        requestAnimationFrame(updateCount);

        // Cleanup function in case the component unmounts
        return () => {
            currentVal = endVal; // Stop the animation
        };

    }, [value]);

    return (
        <div className="border-border px-10 py-10 text-center sm:col-6 lg:col-3 lg:border-r lg:py-0">
            <h2>
                <span className="count">{count}</span> <span className={className}>+</span>
            </h2>
            <p>{text}</p>
        </div>
    );
}
