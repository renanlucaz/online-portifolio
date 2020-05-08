import React from 'react';

import { ServicesSection } from './styles';
import CardGroup from '../CardGroup';
import PageTitle from '../PageTitle';

function Services() {
    return (
        <ServicesSection>
            <PageTitle
                title="Serviços"
                description="Confira serviços de qualidade e com o preço acessível"
            />
            <CardGroup />
        </ServicesSection>
    );
}

export default Services;
