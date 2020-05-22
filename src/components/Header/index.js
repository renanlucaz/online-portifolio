import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Header, IconGroup, Icon, NavBar, NavLink } from './styles';

function Curriculum() {
    window.onscroll = () => {
        const header = document.querySelector('.header');
        const top = window.scrollY;

        if (top >= 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    };

    return (
        <Header className="header">
            <IconGroup>
                <Icon
                    href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </Icon>
                <Icon
                    href="https://www.github.com/renanlucaz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </Icon>
                <Icon
                    href="https://www.instagram.com/renanlucaz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </Icon>
                <Icon
                    href="https://api.whatsapp.com/send?phone=5511996990476&text=Ol%C3%A1!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </Icon>
            </IconGroup>
            <NavBar>
                <NavLink to="main" smooth duration={800} offset={-220}>
                    Home
                </NavLink>

                <NavLink to="about" smooth duration={800} offset={-100}>
                    About
                </NavLink>

                <NavLink to="services" smooth duration={800} offset={-60}>
                    Services
                </NavLink>

                <NavLink to="portifolio" smooth duration={1200}>
                    Portifolio
                </NavLink>
            </NavBar>
        </Header>
    );
}

export default Curriculum;
