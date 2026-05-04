import styled from "styled-components";

const StyledHero = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 485px;

    h1 {
        font-size: 72px;
        font-weight: 600;
        text-align: center;
        color: var(--neutral-100);
        line-height: 83px;
        padding: 0 24px;
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 60px 0;

        h1 {
            font-size: clamp(32px, 10vw, 56px);
            line-height: 1.2;
        }
    }
`

export default function Hero() {
    return (
        <StyledHero>
            <h1>Interfaces limpas,<br/>soluções inteligentes.</h1>
        </StyledHero>
    )
}