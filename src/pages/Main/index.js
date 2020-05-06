import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import { MainArea } from './styles';

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

            <Footer />
        </Container>
    );
}

export default Main;
