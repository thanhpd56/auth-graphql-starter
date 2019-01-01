import React, {Component} from 'react';
import AuthForm from "./AuthForm";
import {graphql} from "react-apollo";
import query from '../queries/CurrentUser'
import {hashHistory} from "react-router";
import mutation from '../mutations/Login';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            errors: []
        }
    }

    render() {
        return (
            <div>
                <h3>Login Form</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors}/>
            </div>
        );
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
          if(!this.props.data.user && nextProps.data.user){
              hashHistory.push('/dashboard');
          }
    }

    onSubmit({email, password}) {
        this.props.mutate({
            variables: {
                email,
                password,
            },
            refetchQueries: [{query}]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });
    }
}


export default graphql(query)(graphql(mutation)(LoginForm));