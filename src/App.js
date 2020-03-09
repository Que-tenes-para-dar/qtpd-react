import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
// pages
import ContactPage from './pages/contact/contact.component';
import HomePage from './pages/homepage/homepage.component';
import HowDoesItWork from './pages/how-does-it-work/how-does-it-work.component';
import SearchCenter from './pages/search-center/search-center.component';
import WhoWeAre from './pages/who-we-are/who-we-are.component';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/como-funciona' component={HowDoesItWork} />
        <Route exact path='/contacto' component={ContactPage} />
        <Route exact path='/busqueda' component={SearchCenter} />
        <Route exact path='/quienes-somos' component={WhoWeAre} />
      </Switch>
    </div>
  );
}

export default App;
