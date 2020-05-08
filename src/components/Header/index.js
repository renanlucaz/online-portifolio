import React from 'react';
import { Link } from 'react-scroll';

import { Header } from './styles';

function Curriculum() {
    return (
        <Header>
            <nav>
                <Link to="main" smooth duration={800} offset={-100}>
                    Início
                </Link>

                <Link to="services" smooth duration={800}>
                    Serviços
                </Link>

                <Link to="portifolio">Portifólio</Link>

                <Link to="curriculo">Currículo</Link>
            </nav>
        </Header>
    );
}

export default Curriculum;
