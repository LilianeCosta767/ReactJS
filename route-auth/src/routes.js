import React from 'react';
import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest} 
        render={props => 
            isAuthenticated() ? (
                <Component {...props} /> //o que acontecerá caso o usuario esteja autenticado
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location  } }} /> // o state garante que o usuario nao perca o historico de rotas dele
            ) // o que acontecerá caso o usuário não esteja autenticado
        }
    />
);

const Routes= () => (
    <BrowserRouter>
        <Switch> 
            <Route exact path="/" component={() => <h1>Hello World</h1>} />
            <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;

//PrivateRoute.: o usuario só acessa a rota se ele estiver autenticado
//path.........: endereço da rota
//exat.........: garante que a rota só seja chamada quando o usuário estiver exatamente no que tá dentro do path
//BrowserRouter: permitir que as rotas trabalhem no navigation do browser (entender e manipular a URL)
//Switch.......: não permite que uma mesma rota seja chamada ao mesmo tempo