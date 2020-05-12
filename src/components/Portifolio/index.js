import React from 'react';

import PageTitle from '../PageTitle';
import { PortifolioItem, PortifolioReversed } from '../PortifolioItem';

import { Container, Button, ButtonContainer } from './styles';

export default function Portifolio() {
    return (
        <Container>
            <PageTitle
                id="port"
                title="Portifólio"
                description="Conheça alguns dos meus trabalhos"
            />
            <PortifolioItem
                description="Aplicação backend"
                image="https://pbs.twimg.com/media/ECGh8zgX4AEvd0k.jpg"
                title="NodeJS Project"
                text="Uma aplicação backend feita em nodeJS que é uma plataforma que
                roda em cima da V8 do google, popular entre as linguagens de backend"
                buttonAction="fs"
            />
            <PortifolioReversed
                description="Aplicação backend"
                image="https://pbs.twimg.com/media/ECGh8zgX4AEvd0k.jpg"
                title="NodeJS Project"
                text="Uma aplicação backend feita em nodeJS que é uma plataforma que
                roda em cima da V8 do google, popular entre as linguagens de backend"
                buttonAction="fs"
            />
            <PortifolioItem
                description="Aplicação backend2s"
                image="https://pbs.twimg.com/media/ECGh8zgX4AEvd0k.jpg"
                title="NodeJS Project"
                text="Uma aplicação backend feita em nodeJS que é uma plataforma que
                roda em cima da V8 do google, popular entre as linguagens de backend"
                buttonAction="fss"
            />
            <ButtonContainer>
                <Button>... Mais projetos</Button>
            </ButtonContainer>
        </Container>
    );
}
