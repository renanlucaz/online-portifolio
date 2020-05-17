import React from 'react';
import Header from '../../components/Header';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Portifolio from '../../components/Portifolio';
import MainSection from '../../components/Main';
import About from '../../components/About';

function Main() {
    return (
        <Container>
            <Header />
            <MainSection />
            <About />
            <Portifolio />
            <Footer />
        </Container>
    );
}

export default Main;
