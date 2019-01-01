import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Route, Router, IndexRoute} from 'react-router';
import App from "./components/App";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import requireAuth from "./components/requireAuth";

const networkInterface = createNetworkInterface({
    uri: 'graphql',
    opts: {
        credentials: "same-origin"
    }
});

const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: o => o.id,
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/dashboard" component={requireAuth(Dashboard)}/>
                    <Route path="/signup" component={SignupForm}/>
                    <Route path="/login" component={LoginForm}/>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));
