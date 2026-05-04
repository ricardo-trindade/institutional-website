import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 102px;

    padding: 0 48px;

    .copyright {
        font-size: 14px;
        font-weight: 400;
        color: var(--neutral-200);
    }

    .social-media ul {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 24px;
    }

    li > a {
        color: var(--neutral-200);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 32px 20px;
        gap: 20px;
        text-align: center;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <span className="copyright">© 2025 Suporte de Domingo. Todos os direitos reservados.</span>
            <nav className="social-media">
                <ul>
                    <li><a href="" className='footer-link'>Dribbble</a></li>
                    <li><a href="" className='footer-link'>LinkedIn</a></li>
                    <li><a href="" className='footer-link'>Twitter</a></li>
                </ul>
            </nav>
        </StyledFooter>
    )
}