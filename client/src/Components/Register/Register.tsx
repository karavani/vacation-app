import axios from 'axios';
import React, { Component, ChangeEvent } from 'react'
import { Link } from 'react-router-dom';
import { newUserDetails } from '../models/newUserDetails';
import "./Register.css";
interface RegisterState {
    eMail: string,
    userName: string,
    password: string,
    passwordValidity: boolean,
    confirmPasswordValidity: boolean
}

export default class Register extends Component<any, RegisterState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            eMail: "",
            userName: "",
            password: "",
            passwordValidity: false,
            confirmPasswordValidity: false
        };
    }


    private setUserName = (args: ChangeEvent<HTMLInputElement>) => {
        const userName = args.target.value;
        this.setState({ userName });
    }
    private setUserEMail = (args: ChangeEvent<HTMLInputElement>) => {
        const eMail = args.target.value;
        this.setState({ eMail });
    }

    private setPassword = (args: ChangeEvent<HTMLInputElement>) => {
        const password = args.target.value;
        this.setState({ password });
        if (password.length < 6 || password.length > 10) {
            this.setState({ passwordValidity: true });
        }
        else {
            this.setState({ passwordValidity: false });
        }
    }
    private setConfirmPassword = (args: ChangeEvent<HTMLInputElement>) => {
        const password = args.target.value;
        if (this.state.password !== password) {
            this.setState({ confirmPasswordValidity: true });
        }
        else {
            this.setState({ confirmPasswordValidity: false });
        }
    }
    private register = async () => {
        if (this.state.passwordValidity === true || this.state.password === '') {
           alert('error invalid password');
        }
        else {
            const userRegisterDetails = new newUserDetails(this.state.userName, this.state.password, this.state.eMail);
            try {
                const response = await axios.post("http://35.239.233.246:3001/users/", userRegisterDetails);
                // creating an object with the data from the server that we requested
                const serverResponse = response.data;

                // building a stamp to user that we request for data
                axios.defaults.headers.common["authorization"] = serverResponse.token;
                sessionStorage.setItem("userToken", serverResponse.token);

                if (serverResponse.userType === "admin") {
                    sessionStorage.setItem("userType", "admin");
                    this.props.history.push('/admin')
                }
                else if (serverResponse.userType === "customer") {
                    sessionStorage.setItem("userType", "customer");
                    this.props.history.push('/home')
                }
            }
            catch (e) {
                alert(e.response.data.error)
            }
        }

    }
    componentDidMount() {
        window.scrollTo(0, window.innerHeight / 1.2)
    }
    public render() {
        return (
            <section className='registerSection'>
                <div className="register">
                    <i className="fas fa-user-tie" id="user-tie" /><br />
                    <h4>Create an account</h4>
                    <p>get started with your free account</p>
                    <i className="fas fa-user" />
                    <form action="register">
                    <input type="text" value={this.state.userName} onChange={this.setUserName} placeholder="User name" name="username" /><br />
                    <i className="fas fa-at" /><input type="text" value={this.state.eMail} onChange={this.setUserEMail} placeholder="User eMail" name="username" /><br />
                    <i className="fas fa-key" /><input type="password" value={this.state.password} onChange={this.setPassword} placeholder="Creat Password" name="password" /><br />
                    {this.state.passwordValidity && <p className='passwordValidtyMessage'>Invalid Password: password must contain 6 to 10 letters or numbers</p>}
                    <i className="fas fa-key" id="confirmPassword" /><input type="password" onChange={this.setConfirmPassword} placeholder="Confirm Password" name="password" /><br />
                    {this.state.confirmPasswordValidity && <p className='passwordValidtyMessage'>Invalid Confirmation Password: password mismatch the password that enterd</p>}
                    <input type="button" value="Register" onClick={this.register} />
                    </form>
                </div>
                <label htmlFor="registerBtn">Have an account?</label>
                <Link to="/login">Log In</Link>
            </section>
        );
    }
}