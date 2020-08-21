import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//pages
import Main from './pages/main'
import About from './pages/about'
import NotFound from './pages/not-found'
import Contact from './pages/contact'

//components
import Header from './components/header'
import Footer from './components/footer'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;
