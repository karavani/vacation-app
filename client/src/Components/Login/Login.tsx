import React, { Component, ChangeEvent } from 'react'
import "./Login.css";
import { UserLoginDetails } from '../models/UserLoginDetails';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import axios from 'axios';
import { store } from '../../redux/store';
import { ActionType } from '../../redux/action-type';
import { Link } from 'react-router-dom';


interface LoginState {
    userName: string,
    password: string,
    passwordValidity: boolean,
}

export default class Login extends Component<any, LoginState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            passwordValidity: false,
        };


    }
    private setUserName = (args: ChangeEvent<HTMLInputElement>) => {
        // args = אובייקט המכיל מידע בנוגע לארוע שהתרחש
        // args.target = אובייקט המתאר את הרכיב שהעלה את הארוע
        // args.target.value = של הרכיב שהעלה את הארוע value-זהו מאפיין ה
        const userName = args.target.value;
        this.setState({ userName });
    }

    private setPassword = (args: ChangeEvent<HTMLInputElement>) => {
        const password = args.target.value;
        this.setState({ password });
    }
    private login = async () => {
        try {
            // creating an object to send to the server
            const userLoginDetails = new UserLoginDetails(this.state.userName, this.state.password);

            // sending the async requste to the server
            const response = await axios.post<SuccessfulLoginServerResponse>("http://35.239.233.246:3001/users/login", userLoginDetails);
            // creating an object with the data from the server that we requested
            const serverResponse = response.data;
            store.dispatch({ type: ActionType.CheckUserStatus, payload: true })
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
        catch (err) {
            alert(err.response.data.error);
            console.log(err);
        }
    }



    public render() {
        return (
            <section>
                <div className="login">
                    <h3>Account Login</h3>
                    <i className="fas fa-user" />
                    <input type="text" value={this.state.userName} onChange={this.setUserName} placeholder="User name" name="username" /><br />
                    <i className="fas fa-key" />
                    <input type="password" value={this.state.password} onChange={this.setPassword} placeholder="Password" name="password" /><br />
                    {this.state.passwordValidity && <p className='passwordValidtyMessage'>Invalid Password: password must contain 6 to 10 letters or numbers</p>}
                    <input type="button" value="login" onClick={this.login} />
                </div>
                <label htmlFor="registerBtn">dont have an account?</label>
                <Link to="/register" >create one here</Link>
            </section>
        );
    }
}


