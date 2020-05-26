import React from 'react';

import {
    Container,
    Title,
    Description,
    Galerry,
    GalerryItem,
    Image,
} from './styles';

import BeTheHero from '../../assets/portifolio/be-the-hero.jpg';
import DevRadar from '../../assets/portifolio/dev-radar.jpg';
import Masks from '../../assets/portifolio/masks-mobile.jpg';
import Rocketshoes from '../../assets/portifolio/rocketshoes.jpg';
import Ajr from '../../assets/portifolio/ajr.jpg';
import Aircnc from '../../assets/portifolio/air-cnc.jpg';

export default function Portifolio() {
    return (
        <Container>
            <Title id="portifolio">Portifólio</Title>
            <Description>Conheça alguns dos meus trabalhos</Description>

            <Galerry>
                <GalerryItem>
                    <Image src={BeTheHero} alt="Be the hero" />
                    <h3>
                        Encontre ONGs que precisam de ajuda, e seja o herói do
                        dia!
                    </h3>
                </GalerryItem>
                <GalerryItem>
                    <Image src={DevRadar} alt="Dev radar" />
                    <h3>
                        Encontre devs perto de você que programam nas mesmas
                        tecnologias que as suas!
                    </h3>
                </GalerryItem>
                <GalerryItem>
                    <Image src={Masks} alt="Masks mobile" />
                    <h3>
                        Quer comprar máscaras artesanais mas não sabe onde
                        encontrar? Veja os melhores vendedores perto de você!
                    </h3>
                </GalerryItem>
                <GalerryItem>
                    <Image src={Rocketshoes} alt="Rocketshoes" />
                    <h3>
                        Sistema de compra de calçados. Feito no Bootcamp GoStack
                        da Rocketseat.
                    </h3>
                </GalerryItem>
                <GalerryItem>
                    <Image src={Ajr} alt="EC Ajr Voleibol" />
                    <h3>Site da EC Ajr Voliebol.</h3>
                </GalerryItem>
                <GalerryItem>
                    <Image src={Aircnc} alt="Aircnc" />
                    <h3>
                        Cadastre os Spots da sua empresa para serem agendandos
                        por devs em tempo real!
                    </h3>
                </GalerryItem>
            </Galerry>
        </Container>
    );
}
