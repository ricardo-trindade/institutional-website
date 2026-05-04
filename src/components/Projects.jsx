import { useState, useRef } from "react";
import styled from "styled-components";
import firstProjectImage from '../assets/img/first-project-image.png'
import secondProjectImage from '../assets/img/second-project-image.png'

const projects = [
    { img: firstProjectImage, alt: "Plataforma Financeira", title: "Plataforma Financeira", tags: "UI/UX Design • Web App" },
    { img: secondProjectImage, alt: "App de E-commerce", title: "App de E-commerce", tags: "Product Design • Mobile" },
];

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 120px 0;

    width: 100%;
    height: auto;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .projects-group {
        display: flex;
        flex-direction: row;
        gap: 41px;
        justify-content: center;

        min-height: 548px;
        width: 100%;
        padding: 0 24px;
    }

    .project-card {
        display: flex;
        flex-direction: column;
        gap: 7px;
        height: 100%;
        flex: 1;
        max-width: 500px;
    }

    .project-card > img {
        width: 100%;
        height: 77%;

        border-radius: 8px;
        margin-bottom: 17px;
    }

    .project-card > span {
        font-size: 15px;
        font-weight: 400;
        color: var(--neutral-200);
    }

    .carousel-wrapper { display: none; }

    @media (max-width: 768px) {
        padding: 80px 0;
        gap: 40px;

        .projects-group { display: none; }

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
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        .carousel-slide > img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 17px;
        }

        .carousel-slide > span {
            font-size: 15px;
            font-weight: 400;
            color: var(--neutral-200);
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

export default function Projects() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);

    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
            if (delta > 0) setCurrent(c => Math.min(c + 1, projects.length - 1));
            else setCurrent(c => Math.max(c - 1, 0));
        }
        touchStartX.current = null;
    }

    return (
        <StyledProjects>
            <div className="title">
                <h4>NOSSO TRABALHO</h4>
                <h2 id="Projects">Projetos selecionados</h2>
            </div>

            {/* Desktop */}
            <div className="projects-group">
                {projects.map(p => (
                    <div className="project-card" key={p.title}>
                        <img src={p.img} alt={p.alt} />
                        <h3>{p.title}</h3>
                        <span>{p.tags}</span>
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
                        {projects.map(p => (
                            <div className="carousel-slide" key={p.title}>
                                <img src={p.img} alt={p.alt} />
                                <h3>{p.title}</h3>
                                <span>{p.tags}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dots">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === current ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Projeto ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </StyledProjects>
    );
}
