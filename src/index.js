import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Conta from './pages/Conta';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/account" exact={true} component={Conta} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
