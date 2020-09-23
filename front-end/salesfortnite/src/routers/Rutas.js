
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
  
  import { Navbar } from '../components/navbar';
  import { Home } from '../pages/Home';
  import { LoginScreen } from '../pages/LoginScreen';
  
  
  import { Apple } from '../pages/StoreScreens/Apple';
  import { Fortnite } from '../pages/StoreScreens/Fortnite';
  import { Google } from '../pages/StoreScreens/Google';
  import { Nintendo } from '../pages/StoreScreens/Nintendo';
  import { Playstation } from '../pages/StoreScreens/Playstation';
  import { Riot } from '../pages/StoreScreens/Riot';
  import { Steam } from '../pages/StoreScreens/Steam';
  import { Xbox } from '../pages/StoreScreens/Xbox';

export const Rutas = () => {
    return (
        <Router>
            
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={LoginScreen} />

                <Route exact path="/Playstation" component={Playstation} />
                <Route exact path="/Apple" component={Apple} />
                <Route exact path="/Fortnite" component={Fortnite} />
                <Route exact path="/Google" component={Google} />
                <Route exact path="/Xbox" component={Xbox} />
                <Route exact path="/Riot" component={Riot} />
                <Route exact path="/Steam" component={Steam} />
                <Route exact path="/Nintendo" component={Nintendo} />

            
                
            </Switch>

        </Router>
    )
}
