import { useState, useRef } from "react";
import styled from "styled-components";
import iconOne from '../assets/icons/icon-one.svg'
import iconTwo from '../assets/icons/icon-two.svg'
import iconThree from '../assets/icons/icon-three.svg'

const specialities = [
    { icon: iconOne, alt: "UI Design", title: "UI Design", description: "Criamos interfaces visuais deslumbrantes, minimalistas e consistentes que comunicam o valor da sua marca no primeiro olhar." },
    { icon: iconTwo, alt: "UX Research", title: "UX Research", description: "Mergulhamos fundo nas necessidades dos seus usuários para desenhar fluxos intuitivos e eliminar atritos na jornada de uso." },
    { icon: iconThree, alt: "Design Systems", title: "Design Systems", description: "Padronizamos componentes e regras de design para que sua equipe de desenvolvimento construa mais rápido e com zero retrabalho." },
];

const StyledSpecialities = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 120px 0;

    width: 100%;
    height: auto;

    background-color: var(--secondary-color);

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .title > h2 { line-height: 48px; }

    .card-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;

        width: 78%;
        gap: 32px;
    }

    .card {
        background-color: var(--card-background);
        border-radius: 8px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1;
        min-width: 0;
    }

    .card-title {
        font-size: 20px;
        font-weight: 600;
        color: var(--neutral-100);
    }

    .card-description {
        font-size: 15px;
        font-weight: 400;
        color: var(--neutral-200);
        line-height: 24px;
    }

    .icon-container {
        width: 48px;
        height: 48px;
        border-radius: 6px;
        background-color: var(--icon-background);
        margin-bottom: 12px;
    }

    .icons {
        height: 24px;
        width: 24px;
        margin: 11px;
        background-color: var(--icon-background);
    }

    .carousel-wrapper { display: none; }

    @media (max-width: 768px) {
        padding: 80px 0;
        gap: 40px;

        .title > h2 { line-height: 1.2; }

        .card-group { display: none; }

        .carousel-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            width: 100%;
        }

        .carousel-track-outer {
            width: 100%;
            overflow: hidden;
        }

        .carousel-track {
            display: flex;
            transition: transform 0.35s ease;
            will-change: transform;
        }

        .carousel-slide {
            min-width: 100%;
            padding: 0 20px;
        }

        .carousel-slide .card {
            width: 100%;
        }

        .dots {
            display: flex;
            gap: 8px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--neutral-200);
            opacity: 0.4;
            cursor: pointer;
            transition: opacity 0.2s, background-color 0.2s;
            border: none;
            padding: 0;
        }

        .dot.active {
            background-color: var(--tertiary-color);
            opacity: 1;
        }
    }
`

export default function Specialities() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);

    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            if (delta > 0) setCurrent(c => Math.min(c + 1, specialities.length - 1));
            else setCurrent(c => Math.max(c - 1, 0));
        }
        touchStartX.current = null;
    }

    return (
        <StyledSpecialities>
            <div className="title">
                <h4 id="Specialities">ESPECIALIDADES</h4>
                <h2>Elevando o padrão <br/> do seu produto digital</h2>
            </div>

            {/* Desktop */}
            <div className="card-group">
                {specialities.map(s => (
                    <div className="card" key={s.title}>
                        <div className="icon-container">
                            <img src={s.icon} alt={s.alt} aria-hidden="true" className="icons" />
                        </div>
                        <h3 className="card-title">{s.title}</h3>
                        <p className="card-description">{s.description}</p>
                    </div>
                ))}
            </div>

            {/* Mobile carousel */}
            <div className="carousel-wrapper">
                <div
                    className="carousel-track-outer"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {specialities.map(s => (
                            <div className="carousel-slide" key={s.title}>
                                <div className="card">
                                    <div className="icon-container">
                                        <img src={s.icon} alt={s.alt} aria-hidden="true" className="icons" />
                                    </div>
                                    <h3 className="card-title">{s.title}</h3>
                                    <p className="card-description">{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dots">
                    {specialities.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === current ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Especialidade ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </StyledSpecialities>
    );
}
