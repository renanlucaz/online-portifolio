import React from 'react';

import {
    Container,
    Title,
    Description,
    Galerry,
    GalerryItem,
    Image,
} from './styles';

export default function Portifolio() {
    return (
        <Container>
            <Title id="portifolio">Portifólio</Title>
            <Description>Conheça alguns dos meus trabalhos</Description>

            <Galerry>
                <GalerryItem>
                    <Image src="https://cdn.dribbble.com/users/1072032/screenshots/5404948/23.jpg" />
                </GalerryItem>
                <GalerryItem>
                    <Image src="https://www.uidownload.com/files/983/489/297/uiexpert-website-home-page-free-download-discover-the-world%E2%80%99s-top-designers-creatives-preview.jpg" />
                </GalerryItem>
                <GalerryItem>
                    <Image src="https://i.pinimg.com/originals/b5/21/64/b5216428627366104122e166463552cf.jpg" />
                </GalerryItem>
                <GalerryItem>
                    <Image src="https://caphe.sfo2.cdn.digitaloceanspaces.com/assets/images/amazon-seller-landing-page-for-sketch-thumb.jpg" />
                </GalerryItem>
                <GalerryItem>
                    <Image src="https://cdn.dribbble.com/users/644755/screenshots/6237973/frame___2x.png" />
                </GalerryItem>
                <GalerryItem>
                    <Image src="https://cdn.psdrepo.com/images/2x/freebie-web-hosting-landing-page-ui-k3.jpg" />
                </GalerryItem>
            </Galerry>
        </Container>
    );
}
