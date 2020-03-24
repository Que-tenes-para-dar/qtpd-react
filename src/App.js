import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// components
import Header from './components/header/header.component';
import FooterNoMap from './components/footer-no-map/footer.no.map.component';

// pages
import ContactPage from './pages/contact/contact.component';
import HomePage from './pages/homepage/homepage.component';
import HowDoesItWork from './pages/how-does-it-work/how-does-it-work.component';
import SearchCenter from './pages/search-center/search-center.component';
import WhoWeAre from './pages/who-we-are/who-we-are.component';

import './App.css';

const App = () => {
  const location = useLocation();

  const showFooterNoMap = () => {
    return location.pathname !== '/';
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/como-funciona' component={HowDoesItWork} />
        <Route exact path='/contacto' component={ContactPage} />
        <Route exact path='/busqueda' component={SearchCenter} />
        <Route exact path='/quienes-somos' component={WhoWeAre} />
      </Switch>
      <FooterNoMap show={showFooterNoMap()}/>
    </>
  );
}

export default App;
