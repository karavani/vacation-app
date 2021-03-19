import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import { ActionType } from '../../redux/action-type';
import { store } from '../../redux/store';
import { Vacation } from '../models/Vacation';
import "./adminPage.css";


interface VacationState {
    vacations: Vacation[];
}

export default class adminPage extends Component<any, VacationState> {
    public constructor(props: any) {
        super(props)
        this.state = { vacations: null }
    }
    componentDidMount() {
        const token = sessionStorage.getItem('userToken');
        const socket = io('http://35.239.233.246:3002/', { query: "userToken=" + token }).connect();
        this.getAllVacations();
        socket.on("vacations-refresh", (data: Vacation[]) => {
            this.setState({ vacations: data })
        })
    }
    componentWillUnmount() {
        const token = sessionStorage.getItem('userToken');
        io('http://35.239.233.246:3002/', { query: "userToken=" + token }).disconnect();
    }
    private getAllVacations = async () => {
        try {
            axios.defaults.headers.common['authorization'] = sessionStorage.getItem("userToken");
            await axios.get("http://35.239.233.246:3001/vacations/").then((res) => {
                this.setState({ vacations: res.data });
                store.dispatch({ type: ActionType.GetAllVacations, payload: res.data })
            })
        }
        catch (e) {
            alert(e.response.data.error)
        }
    }
    private deleteVacation = async (args: any) => {
        let vacationID = +args.target.id;
        try {
            await axios.delete("http://35.239.233.246:3001/vacations/" + vacationID);
        }
        catch (e) {
            alert(e.response.data.error)
        }
    }

    private editVacation = async (args: any) => {
        let vacationID = +args.target.id;
        store.dispatch({ type: ActionType.SendVacationId, payload: vacationID });
        this.props.history.push("/admin/edit");
    }
    public render() {
        if (this.state.vacations === null) {
            return <h1>loading vacations...</h1>
        }
        return (
            <div className="section-vacationCards">
                <div className="VacationBtnsSection">
                    <div className="addVacationBtnDiv"><Link to="/admin/add" className='addVacationBtn'><i className="fas fa-plus-circle"> Add New Vacation</i></Link> </div>
                    <div className="addVacationBtnDiv"><Link to="/reports" className='addVacationBtn'><i className="fas fa-chart-bar"> View Tracking graph</i></Link> </div>
                </div> {this.state.vacations.map((vacation, index) => <div className="vacation" key={index} {...vacation.id}>
                    <img src={vacation.imageUrl} alt="img" />
                    <i id={JSON.stringify(vacation.id)} className="fas fa-trash-alt" onClick={this.deleteVacation} />
                    <h2 className="destination">{vacation.destination}</h2>
                    <i id={JSON.stringify(vacation.id)} className="far fa-edit" onClick={this.editVacation} />
                    <div className="datesVacation">
                        <p>{vacation.startDate} -
                        {vacation.endDate}</p></div>
                    <div className="descriptionVacation">
                        <p>{vacation.description}</p></div>
                    <h5>PRICE: {vacation.price}$</h5>
                </div>)}
            </div>
        );
    }
}