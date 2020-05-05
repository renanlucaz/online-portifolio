import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

function Curriculum() {
    return (
        <Header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/services">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/portifolio">Portifólio</Link>
                    </li>
                    <li>
                        <Link to="/curriculo">Currículo</Link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
}

export default Curriculum;
