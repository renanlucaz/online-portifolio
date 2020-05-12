import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Header } from './styles';

function Curriculum() {
    return (
        <Header>
            <div className="icons">
                <a
                    href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.github.com/renanlucaz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/renanlucaz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5511996990476&text=Ol%C3%A1!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>
            <nav>
                <Link to="main" smooth duration={800} offset={-100}>
                    Início
                </Link>

                <Link to="stack" smooth duration={800} offset={-100}>
                    Stack
                </Link>

                <Link to="services" smooth duration={800} offset={-60}>
                    Portifólio
                </Link>

                <Link to="contact" smooth duration={1200}>
                    Contato
                </Link>
            </nav>
        </Header>
    );
}

export default Curriculum;
