import React from 'react';

import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer, MainArea } from './styles';

import profile from '../../assets/perfil.jpg';

function Main() {
    return (
        <Container>
            <Header />

            <MainArea>
                <div className="content">
                    <h1>
                        Renan Nascimento <br /> <span>FullStack Developer</span>
                    </h1>
                    <p>
                        Programador na stack NodeJS, ReactJS e React Native.
                        <br />
                        Sempre pronto para adquirir novos conhecimentos e
                        experiências.
                    </p>

                    <Link to="/services">Contratar serviços</Link>
                    <Link to="/portifolio" className="outline">
                        Portifólio
                    </Link>
                </div>
                <div className="profile">
                    <img src={profile} alt="Renan Nascimento" />
                </div>
            </MainArea>

            <Footer>
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
            </Footer>
        </Container>
    );
}

export default Main;
