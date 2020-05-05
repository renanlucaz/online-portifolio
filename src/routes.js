import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Services from './pages/Services';
import Portifolio from './pages/Portifolio';
import Curriculum from './pages/Curriculum';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/services" component={Services} />
                <Route path="/portifolio" component={Portifolio} />
                <Route path="/Curriculo" component={Curriculum} />
            </Switch>
        </BrowserRouter>
    );
}
