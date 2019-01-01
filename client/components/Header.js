import React, {Component} from 'react';
import {Link} from "react-router";
import {graphql} from "react-apollo";
import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout';

class Header extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{query}]
        })
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }

    renderButtons() {
        const {user, loading} = this.props.data;

        if (loading) {
            return <div/>
        }
        if (user) {
            return <li onClick={this.onLogoutClick.bind(this)}><a>Logout</a></li>
        }

        return <div>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>SignUp</Link></li>
        </div>
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);