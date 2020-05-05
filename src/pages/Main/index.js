import React from 'react';

import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer, MainArea } from './styles';

function Main() {
    return (
        <Container>
            <Header />

            <MainArea>
                <div className="content">
                    <h1>
                        Renan Lucas <br /> <span>FullStack Developer</span>
                    </h1>
                    <p>
                        Programador na stack NodeJS, ReactJS e React Native.
                        <br />
                        Sempre pronto para adquirir novos conhecimentos e
                        experiências.
                    </p>
                    <Link to="/services">Contratar serviços</Link>
                    <Link to="/portifolio">Portifólio</Link>
                </div>
                <div className="photo">
                    <img
                        src="https://avatars1.githubusercontent.com/u/52937668?v=4l"
                        alt="Renan Lucas"
                    />
                </div>
            </MainArea>

            <Footer>
                <div className="icons">
                    <a
                        href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/renan-nascimento-16a5811a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>
                </div>

                <p>Copyright©‎ 2020 Renan Nascimento</p>
            </Footer>
        </Container>
    );
}

export default Main;
