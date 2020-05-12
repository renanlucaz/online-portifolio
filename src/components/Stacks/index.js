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
                    Tecnologias avançadas de desenvolvimento como ReactJS para
                    construção de sistemas Web com qualidade e performace.
                </Description>
                <hr />
            </Content>

            <Content>
                <MdSmartphone />
                <Title>Mobile</Title>
                <Description>
                    Tecnologias avançadas de desenvolvimento como ReactJS para
                    construção de sistemas Web com qualidade e performace.
                </Description>
                <hr />
            </Content>
        </Container>
    );
}

export default Stacks;
