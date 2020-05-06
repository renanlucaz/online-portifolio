import React from 'react';

import { ServicesSection } from './styles';

function Services() {
    return (
        <ServicesSection>
            <h1 id="services">Serviços</h1>
            <p>Confira serviços de qualidade e com o preço acessível</p>
            <div className="card-group">
                <div className="card">
                    <img
                        src="https://i.ibb.co/XpWfDb5/restackpage.png"
                        alt=""
                    />
                    <h2>Sistema web</h2>
                    <p>
                        Lorem ipsom dolot amet ipsom dolot ipsom dolot ipsom
                        dolot ipsom dolotipsom dolot
                    </p>
                    <a href="http://facebook.com">Acessar</a>
                </div>
                <div className="card selected">
                    <img
                        src="https://i.ibb.co/XpWfDb5/restackpage.png"
                        alt=""
                    />
                    <h2>Portifólio</h2>
                    <p>
                        Lorem ipsom dolot amet ipsom dolot ipsom dolot ipsom
                        dolot ipsom dolotipsom dolot
                    </p>
                    <a href="http://facebook.com">Acessar</a>
                </div>
                <div className="card">
                    <img
                        src="https://i.ibb.co/XpWfDb5/restackpage.png"
                        alt=""
                    />
                    <h2>Landing page</h2>
                    <p>
                        Lorem ipsom dolot amet ipsom dolot ipsom dolot ipsom
                        dolot ipsom dolotipsom dolot
                    </p>
                    <a href="http://facebook.com">Acessar</a>
                </div>
            </div>
        </ServicesSection>
    );
}

export default Services;
