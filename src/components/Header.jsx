import { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/icons/logo.svg';
import menuAside from '../assets/icons/menu-aside-icon.svg';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0px 48px;
    width: 100%;
    height: 107px;
    font-size: 15px;
    font-weight: 500; 
    color: var(--neutral-200);
    background-color: var(--header-background);
    z-index: 1000;

    img {
        width: 160px;
        height: 40px;
    }

    ul {
        list-style: none; 
        padding: 0;
        margin: 0;
    }

    .navigation ul {
        display: flex;
        align-items: center;
        gap: 32px;    
    }

    .common-link { color: var(--neutral-200); text-decoration: none; }
    .common-link:hover { color: var(--hover-neutral-200); }

    .portfolio-link { color: var(--tertiary-color); text-decoration: none; }   
    .portfolio-link:hover { color: var(--blue-hover); }

    .start-button {
        background-color: var(--tertiary-color);
        color: var(--neutral-100);
        width: 85px;
        height: 43px;
        border-radius: 6px;
        display: inline-block;
        text-align: center;
        line-height: 43px;
        text-decoration: none;
    }

    .aside-menu { display: none; }

    @media (max-width: 768px) {
        padding: 0 20px;

        .navigation { display: none; }

        .aside-menu {
            display: flex;
            width: 43px;
            cursor: pointer;
            background: none;
            border: none;
        }
    }

    .aside-container {
        display: flex;
        position: fixed;
        top: 107px;
        right: 0;
        left: 0;

        width: 100%;
        height: calc(100vh - 107px);
        background-color: var(--header-background);
        padding: 48px 40px;
        font-size: 24px;

        transform: translateX(100%);
        transition: transform 0.35s ease, visibility 0s 0.35s;
        visibility: hidden;
    }

    .aside-container.show {
        transform: translateX(0);
        transition: transform 0.35s ease, visibility 0s 0s;
        visibility: visible;
    }

    .aside-container ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
        width: 100%;
    }

    .aside-container .start-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 48px;
        line-height: normal;
        font-size: 24px;
    }
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <StyledHeader>
            <img src={logo} alt="Logo da empresa" />

            <nav className='navigation'>
                <ul>
                    <li><a href="#" className='common-link'>Home</a></li>
                    <li><a href="#" className='common-link'>Contato</a></li>
                    <li><a href="#" className='portfolio-link'>Portfolio</a></li>
                    <li><a href="#" className='start-button'>Começar</a></li>
                </ul>
            </nav>

            <button className='aside-menu' onClick={toggleMenu}>
                <img src={menuAside} alt="Menu" />
            </button>

            <div className={`aside-container ${isMenuOpen ? 'show' : ''}`}>
                <nav>
                  <ul>
                    <li><a href="#" className='common-link'>Home</a></li>
                    <li><a href="#" className='common-link'>Contato</a></li>
                    <li><a href="#" className='portfolio-link'>Portfolio</a></li>
                        <li><a href="#" className='start-button'>Começar</a></li>
                  </ul>
                </nav>
            </div>
        </StyledHeader>         
    );
}