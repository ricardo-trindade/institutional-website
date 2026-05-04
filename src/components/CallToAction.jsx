import styled from "styled-components";
import Arrow from "../assets/icons/arrow-icon.svg"

const StyledCallToAction = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    text-align: center;

    width: 100%;
    min-height: 520px;
    padding: 80px 48px;

    background-color: var(--secondary-color);

    .h2-call-to-action {
        font-size: 48px;
        line-height: 53px;
    }

    .invite {
        line-height: 27px;
        color: var(--neutral-200);
        font-size: 18px;
        font-weight: 400;
        max-width: 600px;
    }

    @media (max-width: 768px) {
        padding: 60px 24px;
        min-height: unset;

        .h2-call-to-action {
            font-size: clamp(28px, 8vw, 40px);
            line-height: 1.2;
        }

        .invite {
            font-size: 16px;
        }

        br { display: none; }
    }

    .start-a-project {
        background-color: var(--tertiary-color);
        color: var(--neutral-100);
        font-size: 16px;
        font-weight: 500;

        width: 224px;
        height: 56px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        border-radius: 6px;
    }

`

export default function CallToAction() {
    return (
        <StyledCallToAction>
            <h2 className="h2-call-to-action">Pronto para transformar <br/> sua interface?</h2>
            <p className="invite">Vamos conversar sobre como podemos ajudar seu produto a alcançar <br/> o próximo nível em usabilidade e estética.</p>
            <a href="" className="start-a-project">Iniciar um projeto <img src={Arrow} alt="Seta" /></a>
        </StyledCallToAction>
    )
}