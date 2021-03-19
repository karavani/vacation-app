/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    public render() {
        return (
            <div className="footerContainer">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">cities</a></li>
                        <li><a href="#">airports</a></li>
                        <li><a href="#">countries</a></li>
                        <li><a href="#">airlines</a></li>
                        <li><a href="#">car rental</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">help</a></li>
                        <li><a href="#">payment options</a></li>
                        <li><a href="#">security</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}