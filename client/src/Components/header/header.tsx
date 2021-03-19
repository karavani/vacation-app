/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import { store } from '../../redux/store';
import './header.css';
import { Unsubscribe } from 'redux';
import { ActionType } from '../../redux/action-type';
import { Link } from 'react-router-dom';

interface IsLogged {
    isLoggedIn: boolean
}
export default class Header extends Component<any, IsLogged> {

    public constructor(props: any) {
        super(props)
        this.state = { isLoggedIn: store.getState().isLoggedIn }
    }
    private unsubscribeStore: Unsubscribe;
    componentDidMount() {
        this.unsubscribeStore = store.subscribe(() => this.setState({ isLoggedIn: store.getState().isLoggedIn }));

    }
    componentWillUnmount() {
        this.unsubscribeStore();
    }
    private logout = () => {
        store.dispatch({ type: ActionType.CheckUserStatus, payload: false })
        sessionStorage.clear()
    }


    public render() {
        return (
            <div className="header">
                <div className="bg-image"></div>
                <nav className="navbar">
                    <div className="inner-width">
                        {!store.getState().isLoggedIn && <Link to="/login" className="logo"><i className="fas fa-sign-in-alt"></i> Login</Link>}
                        {store.getState().isLoggedIn && <Link to="/login" onClick={this.logout} className="logo"><i className="fas fa-sign-out-alt"></i> Logout</Link>}
                    </div>
                </nav>
                <section id="header">
                    <div className="inner-width">
                        <div className="content">
                            <h1>Fly to </h1>
                            <div className="sm">
                                <a href="https://www.facebook.com/noam12881" className="fab fa-facebook-f"></a>
                                <a href="#" className="fab fa-twitter"></a>
                                <a href="https://www.instagram.com/noamkaravani/" className="fab fa-instagram"></a>
                                <a href="https://il.linkedin.com/in/noam-karavani-5958741a9" className="fab fa-linkedin-in"></a>
                                <a href="#" className="fab fa-youtube"></a>
                            </div>
                            <div className="buttons">
                                <a href="#">Contact me</a>
                                <a href="#">Download CV</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}