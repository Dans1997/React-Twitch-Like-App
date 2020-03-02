import React from 'react';
import { Button } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { signInAction, signOutAction } from '../actions'

const clientId = '685048924897-8h7e15bn8k6r7o2btdeeg00su64f1lns.apps.googleusercontent.com';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signInAction(this.auth.currentUser.get().getId());
        } else {
            this.props.signOutAction();
        }  
    }

    onSingInClick = () => {
        this.auth.signIn();
    }

    onSingOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <Button onClick={this.onSingOutClick} key="3" type="primary" icon={<LogoutOutlined />}>
                    Logout
                </Button>
            )
        } else {
            return (
                <Button onClick={this.onSingInClick} key="2" type="primary" icon={<LoginOutlined />}>
                    Login
                </Button>
            )
        }
    }

    render() {
        return this.renderAuthButton();
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
    mapStateToProps, 
    { signInAction, signOutAction }
)(GoogleAuth);