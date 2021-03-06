import React from 'react';

import {
    ServicesSection,
    StacksTitle,
    Title,
    AboutContainer,
    Line,
    TopText,
    Presentation,
    AboutDescription,
    CodeTitle,
    AboutImage,
    Love,
    InfoContainer,
    Email,
    Locale,
} from './styles';
import Stacks from '../Stacks';

import profile from '../../assets/perfil.png';

function About() {
    return (
        <ServicesSection>
            <AboutContainer>
                <Presentation>
                    <Title id="about">
                        About <span>me</span>
                    </Title>
                    <Line size="80px" />
                    <TopText>Hello World!</TopText>
                    <CodeTitle>
                        C<Love />
                        DE
                    </CodeTitle>
                    <AboutDescription>
                        Meu nome é Renan Lucas Brandão do Nascimento, tenho 17
                        anos e sou apaixonado pelo mundo do desenvolvimento em
                        backend, frontend e mobile. Entrei no mundo do
                        desenvolvimento com 15 anos, e até hoje continuo com
                        minha carreira. Espero um dia ser um grande programador
                        :)
                    </AboutDescription>
                    <InfoContainer>
                        <Email>
                            <strong>Email:</strong> renanlucaz53@gmail.com
                        </Email>
                        <Locale>
                            <strong>City:</strong> Rio Grande da Serra - SP
                        </Locale>
                    </InfoContainer>
                </Presentation>
                <AboutImage src={profile} alt="Renan Nascimento" />
            </AboutContainer>
            <StacksTitle id="services">Working with:</StacksTitle>
            <Stacks />
        </ServicesSection>
    );
}

export default About;
