import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

const clientId = '685048924897-8h7e15bn8k6r7o2btdeeg00su64f1lns.apps.googleusercontent.com';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSingIn = () => {
        this.auth.signIn();
    }

    onSingOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <Button onClick={this.onSingOut} key="3" type="primary" icon={<LogoutOutlined />}>
                    Logout
                </Button>
            )
        } else {
            return (
                <Button onClick={this.onSingIn} key="2" type="primary" icon={<LoginOutlined />}>
                    Login
                </Button>
            )
        }
    }

    render() {
        return this.renderAuthButton();
    }
}

export default GoogleAuth;