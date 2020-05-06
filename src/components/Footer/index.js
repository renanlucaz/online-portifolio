import React from 'react';

import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { PageFooter } from './styles';

function Footer() {
    return (
        <PageFooter>
            <div className="icons">
                <a
                    href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={25} />
                </a>
                <a
                    href="https://www.github.com/renanlucaz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={25} />
                </a>
                <a
                    href="https://www.instagram.com/renanlucaz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram size={25} />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5511996990476&text=Ol%C3%A1!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={25} />
                </a>
            </div>

            <p>Copyright©‎ 2020 Renan Nascimento</p>
        </PageFooter>
    );
}

export default Footer;
