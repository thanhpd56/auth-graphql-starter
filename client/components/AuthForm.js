import React, {Component} from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const state = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input name="email" placeholder="Email" value={state.email}
                           onChange={this.handleChange.bind(this)}/>
                    <input name="password" placeholder="Password" type="password" value={state.password}
                           onChange={this.handleChange.bind(this)}/>
                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>

                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
}

export default AuthForm;