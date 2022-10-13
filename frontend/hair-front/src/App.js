import React, { useEffect, useState } from "react";
import HairdressersContainer from "./components/HairdressersContainer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import Hairstyle from './components/Hairstyle'
import HairstyleContainer from './components/HairstyleContainer'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/home" component={ HomePage } />
                </Switch>
            </div>
        </Router>
  <HairdressersContainer hairdressers={hairdressers} />
      <Hairstyle/>
    )

}
