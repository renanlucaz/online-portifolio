/* eslint-disable react/prop-types */
import React from 'react';

import { Title, Description } from './styles';

function PageTitle({ title, description }) {
    return (
        <>
            <Title id="services">{title}</Title>
            <Description>{description}</Description>
        </>
    );
}

export default PageTitle;
