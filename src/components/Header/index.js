import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

function Curriculum() {
    return (
        <Header>
            <nav>
                <Link to="/">Início</Link>

                <Link to="/services">Serviços</Link>

                <Link to="/portifolio">Portifólio</Link>

                <Link to="/curriculo">Currículo</Link>
            </nav>
        </Header>
    );
}

export default Curriculum;
