import React from 'react';

import { ServicesSection, PageTitle } from './styles';
import Stacks from '../Stacks';

function Services() {
    return (
        <ServicesSection>
            <PageTitle>Working with:</PageTitle>
            <Stacks />
        </ServicesSection>
    );
}

export default Services;
