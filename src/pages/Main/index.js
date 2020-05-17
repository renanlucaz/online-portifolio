import React from 'react';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Portifolio from '../../components/Portifolio';
import MainSection from '../../components/Main';
import Services from '../../components/Services';

function Main() {
    return (
        <Container>
            <Header />
            <MainSection />
            <Services id="port" />
            <Portifolio />
            <Footer />
        </Container>
    );
}

export default Main;
