import React from 'react';

import { MdWeb, MdLayers, MdSmartphone } from 'react-icons/md';
import { Container, Content, Title, Description } from './styles';

function Stacks() {
    return (
        <Container>
            <Content>
                <MdWeb />
                <Title>Web</Title>
                <Description>
                    Tecnologias avançadas de desenvolvimento como ReactJS para
                    construção de sistemas Web com qualidade e performace.
                </Description>
                <hr />
            </Content>

            <Content>
                <MdLayers />
                <Title>Backend</Title>
                <Description>
                    Desenvolvimento de APIs com NodeJS, que garante uma
                    aplicação com velocidade e escalabilidade.
                </Description>
                <hr />
            </Content>

            <Content>
                <MdSmartphone />
                <Title>Mobile</Title>
                <Description>
                    Criação e manutenção de aplicativos nativos para Android e
                    IOS com React Native.
                </Description>
                <hr />
            </Content>
        </Container>
    );
}

export default Stacks;
