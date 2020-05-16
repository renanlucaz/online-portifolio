import React from 'react';

import { FaChevronDown } from 'react-icons/fa';

import { Link } from 'react-scroll';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Portifolio from '../../components/Portifolio';
import Services from '../../components/Services';
import { MainArea } from './styles';

import profile from '../../assets/perfil.jpg';

function Main() {
    return (
        <Container>
            <Header />
            <MainArea>
                <section className="main">
                    <div className="content">
                        <h1>
                            Renan Nascimento <br />
                            <span>FullStack Developer</span>
                        </h1>
                        <p>
                            Programador na stack NodeJS, ReactJS e React Native.
                            <br />
                            Sempre pronto para adquirir novos conhecimentos e
                            experiências.
                        </p>

                        <Link to="services" smooth duration={800}>
                            Contratar serviços
                        </Link>
                        <Link to="/portifolio" className="outline">
                            Portifólio
                        </Link>
                    </div>
                    <div className="profile">
                        <img src={profile} id="main" alt="Renan Nascimento" />
                    </div>
                </section>
                <Link to="services" smooth duration={800}>
                    <FaChevronDown />
                </Link>
            </MainArea>
            <Services id="port" />
            <Portifolio />
            <Footer />
        </Container>
    );
}

export default Main;
