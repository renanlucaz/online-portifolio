import React from 'react';

import Card from '../Card';
import { GroupCard, Slider } from './styles';

function CardGroup() {
    const beTheHero = 'https://i.ibb.co/XpWfDb5/restackpage.png';

    return (
        <GroupCard>
            <Slider>
                <Card
                    title="Portifólio"
                    description="Compartilhe você mesmo as informações do seu negócio ou empresa
                de forma prática, profissional e em tempo real. Tenha sua
                empresa na internet!"
                    img={beTheHero}
                    alt="Sistema web imagem"
                    action="portifólio online"
                    price="R$250,00"
                />
                <Card
                    title="Aplicativo"
                    description="Compartilhe você mesmo as informações do seu negócio ou empresa
                de forma prática, profissional e em tempo real. Tenha sua
                empresa na internet!"
                    img={beTheHero}
                    alt="Sistema web imagem"
                    action="aplicativos"
                    price="R$500,00"
                />
                <Card
                    title="Sistema Web"
                    description="Compartilhe você mesmo as informações do seu negócio ou empresa
                de forma prática, profissional e em tempo real. Tenha sua
                empresa na internet!"
                    img={beTheHero}
                    alt="Sistema web imagem"
                    action="sistema web"
                    price="R$450,00"
                />
            </Slider>
        </GroupCard>
    );
}

export default CardGroup;
