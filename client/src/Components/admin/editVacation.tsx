import axios from 'axios';
import React, { ChangeEvent, Component } from 'react'
import { Unsubscribe } from 'redux';
import { store } from '../../redux/store';
import { Vacation } from '../models/Vacation';

interface vacationState {
    id: number,
    vacation: Vacation,
    destination: string,
    description: string,
    startDate: Date,
    endDate: Date,
    price: number,
    imageUrl: string,
}


export default class editVacation extends Component<any, vacationState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            id: 0,
            vacation: new Vacation(),
            destination: "",
            description: "",
            startDate: new Date(),
            endDate: new Date(),
            price: 0,
            imageUrl: ''
        }
    }
    private unsubscribeStore: Unsubscribe;
    
    componentWillUnmount() {
        this.unsubscribeStore();
    }
    componentDidMount() {
        this.unsubscribeStore = store.subscribe(() => this.setState({
            id: store.getState().vacationId
        }));
        this.getVacationById();
    }
    private getVacationById = async () => {
        let vacationIdToEdit = store.getState().vacationId
        axios.defaults.headers.common['authorization'] = sessionStorage.getItem("userToken");
        try {
            await axios.get("http://35.239.233.246:3001/vacations/" + vacationIdToEdit).then((res) => {
                let vacation = res.data[0];
                this.setState({
                    id: vacation.id,
                    destination: vacation.destination,
                    description: vacation.description,
                    startDate: new Date(vacation.startDate),
                    endDate: new Date(vacation.endDate),
                    price: vacation.price,
                    imageUrl: vacation.imageUrl
                });

            })
        }
        catch (e) {
            alert(e.response.data.error)
        }

    }

    private setDestination = (args: ChangeEvent<HTMLInputElement>) => {
        let destination = args.target.value;
        this.setState({ destination })
    }
    private setDescription = (args: ChangeEvent<HTMLTextAreaElement>) => {
        let description = args.target.value;
        this.setState({ description })
    }
    private setStartDate = (args: ChangeEvent<HTMLInputElement>) => {
        let startDate = new Date(args.target.value);
        this.setState({ startDate })
    }
    private setEndDate = (args: ChangeEvent<HTMLInputElement>) => {
        let endDate = new Date(args.target.value);
        this.setState({ endDate })
    }
    private setPrice = (args: ChangeEvent<HTMLInputElement>) => {
        let price = +args.target.value;
        this.setState({ price })
    }
    private setImageUrl = (args: ChangeEvent<HTMLInputElement>) => {
        let imageUrl = args.target.value;
        this.setState({ imageUrl })
    }
    private discardChanges = () => {
        this.getVacationById();
    }
    private editVacation = async (e: any) => {
        e.preventDefault();
        let vacationToEdit = new Vacation(
            this.state.destination,
            this.state.description,
            this.state.startDate,
            this.state.endDate,
            this.state.price,
            this.state.imageUrl,
            store.getState().vacationId);
        try {
            axios.defaults.headers.common['authorization'] = sessionStorage.getItem("userToken");
            await axios.put("http://35.239.233.246:3001/vacations/", vacationToEdit);
                this.props.history.push("/admin");
        }
        catch (e) {
            alert(e.response.data.error);
        }
    }

    public render() {
        return (
            <section className='editSection'>
                <h4>Vacations Editor</h4>
                <form action="editVacation">
                    <input type="text" placeholder="destination" value={this.state.destination} onChange={this.setDestination} required/><br />
                    <textarea placeholder="description" value={this.state.description} onChange={this.setDescription} required/><br />
                    <label htmlFor="startDate">startDate</label><br />
                    <input type="date" name="startDate" min={new Date().toISOString().split("T")[0]}
                        value={new Date(this.state.startDate).toISOString().split("T")[0]} onChange={this.setStartDate} required /><br />
                    <label htmlFor="endDate">endDate</label><br />
                    <input type="date" name="endDate" min={new Date(this.state.startDate).toISOString().split("T")[0]}
                        value={new Date(this.state.endDate).toISOString().split("T")[0]} onChange={this.setEndDate} required/><br />
                    <input type="number" placeholder="price" value={this.state.price} onChange={this.setPrice} required /><br />
                <div className="imageEditSection">
                    <input type="text" placeholder="image Url" value={this.state.imageUrl} onChange={this.setImageUrl} required />
                    <img src={this.state.imageUrl} alt="invalid img source" />
                </div>
                    <input type="submit" value="submit" onClick={this.editVacation} /></form>
                <input type="button" id="discardChanges" value="discard changes" onClick={this.discardChanges} />
            </section>

        );
    }
}