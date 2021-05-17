import { Component } from 'react';
import Projects from './components/Projects'
import PROJECTS from './data/projects';
import SocilaProfiles from './components/SocialProfiles';
import Profile from './components/Profile';
import './index.css';
import SOCIAL from './data/social';
import { PROFILE } from './data/profile';
import Jokes from "./components/Jokes"
import { HEADER } from "./components/Header";
import {  Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";


class App extends Component {


    render() {
        return (
            <div className="container">
                
                <Router  history={createBrowserHistory()}>
                <HEADER></HEADER>
                    <Switch>
                    <Route exact path="/">
                        <Profile data={PROFILE} />
                        <Projects projects={PROJECTS} />
                        <SocilaProfiles profiles={SOCIAL} />
                    </Route>
                    <Route path="/jokes">
                        <Jokes></Jokes>
                    </Route>
                    </Switch>
                </Router>
            </div>
        )
    }


}

export default App; 