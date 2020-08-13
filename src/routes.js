import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Header from './components/header'
import Footer from './components/footer'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;
