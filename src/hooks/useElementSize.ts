import { useState, useLayoutEffect, useRef, RefObject } from 'react';

interface Size {
    width: number;
    height: number;
}

export const useElementSize = (): {ref: RefObject<HTMLDivElement | null>; width: number; height: number;} => {
    const ref = useRef<HTMLDivElement>(null); 
    
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setSize({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight,
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { ref, width: size.width, height: size.height };
};