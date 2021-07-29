import axios from 'axios';
import React, { ChangeEvent, Component } from 'react'
import { io } from 'socket.io-client';
import { ActionType } from '../../redux/action-type';
import { store } from '../../redux/store';
import { Vacation } from '../models/Vacation';
import "./vacations.css"

interface VacationState {
    vacations: Vacation[];
}

export default class vacation extends Component<any, VacationState>{
    public constructor(props: any) {
        super(props)
        this.state = { vacations: null }
    }

    componentDidMount() {
        const token = sessionStorage.getItem('userToken');
        const socket = io('http://35.239.233.246:3002/', { query: "userToken=" + token }).connect();
        socket.on("vacations-refresh", (data: Vacation[]) => {
            this.setState({ vacations: data })
        })
        this.getAllVacations();
    }
    componentWillUnmount() {
        const token = sessionStorage.getItem('userToken');
        io('http://35.239.233.246:3002/', { query: "userToken=" + token }).disconnect();
        store.dispatch({ type: ActionType.CheckUserStatus, payload: false })
    }

    private getAllVacations = async () => {
        const token = sessionStorage.getItem("userToken");
        axios.defaults.headers.common["authorization"] = token;
        try {
            await axios.get("http://35.239.233.246:3001/vacations/").then((res) => {
                this.setState({ vacations: res.data });
            })
        }
        catch (e) {
            alert(e.response.data.error)
        }
    }
    private setFollow = async (args: ChangeEvent<HTMLInputElement>) => {
        const vacationId = +args.target.id;

        const vacations = [...this.state.vacations];

        vacations.forEach((vacation) => {
            if (vacationId === vacation.id) {
                vacation.isFollowing = !vacation.isFollowing;
                if (vacation.isFollowing) {
                    vacation.numOfFollowers++;
                }
                else {
                    vacation.numOfFollowers--;
                }
                this.setState({ vacations })
            }
        })
        if (args.target.checked === true) {
            try {
                await axios.post("http://35.239.233.246:3001/users/follow/", { vacationId });
            }
            catch (e) {
                alert(e.response.data.error)
            }
        }
        else {
            try {
                await axios.delete("http://35.239.233.246:3001/users/follow/" + vacationId);
            }
            catch (e) {
                alert(e.response.data.error)
            }
        }
    }

    public render() {
        if (this.state.vacations === null) {
            return <h1>loading vacations..</h1>
        }
        return (
            <div className="section-vacationCards" >
                {
                    this.state.vacations.sort(function (a, b) {
                        // true values first
                        return (a.isFollowing === b.isFollowing) ? 0 : a.isFollowing ? -1 : 1;
                        // false values first
                        // return (x === y)? 0 : x? 1 : -1;
                    }).map((vacation, index) => <div className="vacation" key={index} {...vacation.id}>
                        <img src={vacation.imageUrl} alt="img" />
                        <h2>{vacation.destination}</h2>
                        <div className="datesVacation">
                            <p>{vacation.startDate} -
                                {vacation.endDate}
                            </p></div>
                        <div className="descriptionVacation">
                            <p>{vacation.description}</p></div>
                        <h5>PRICE: {vacation.price}$</h5>
                        <label className="like-icon">
                            <input className="like-button" id={JSON.stringify(vacation.id)} type="checkbox" checked={vacation.isFollowing} onChange={this.setFollow} />
                            <svg width="42" height="42" clipRule="evenodd" fillRule="evenodd"
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"><defs>
                                    <style type="text/css">
                                    </style>
                                </defs><path className="fil0 str0" d="M412 79c-53-40-146-17-162 68-16-85-109-108-162-68-43 32-55 94-44 137 30 119 194 217 206 224 12-7 176-105 206-224 11-43-1-105-44-137z" id="Layer_x0020_1" />
                            </svg>
                        </label>
                        <p className="followers">{vacation.numOfFollowers} following</p>
                    </div>)
                }
            </div>
        );
    }
}