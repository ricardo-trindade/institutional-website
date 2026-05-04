import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    opacity: 0;
    transform: translateY(48px);
    transition: opacity 0.65s ease, transform 0.65s ease;
    transition-delay: ${({ $delay }) => $delay || '0s'};

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

export default function Reveal({ children, delay }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Wrapper ref={ref} className={visible ? 'visible' : ''} $delay={delay}>
            {children}
        </Wrapper>
    );
}
