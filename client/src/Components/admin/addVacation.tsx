import axios from 'axios'
import React, { ChangeEvent, Component } from 'react'
import { Vacation } from '../models/Vacation'

interface addVacationInterface {
    destination: string,
    description: string,
    startDate: Date,
    endDate: Date,
    price: number,
    imageUrl: string
}


export default class addVacation extends Component<any, addVacationInterface> {

    public constructor(props: any) {
        super(props)
        this.state = {
            destination: "",
            description: "",
            startDate: new Date(),
            endDate: new Date(),
            price: 0,
            imageUrl: '',
        }
    }

    private setDestination = (args: ChangeEvent<HTMLInputElement>) => {
        let destination = args.target.value;
        this.setState({ destination })
    }

    private setDescription = (args: ChangeEvent<HTMLInputElement>) => {
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
    private addVacation = async (e: any) => {
            e.preventDefault();
            let vacation = new Vacation(this.state.destination, this.state.description, this.state.startDate, this.state.endDate
                , this.state.price, this.state.imageUrl);
            try {
                await axios.post('http://35.239.233.246:3001/vacations/', vacation).then(() => {
                    alert('succes!!: new vacation inserted');
                    this.props.history.push("/admin");
                })
            }
            catch (e) {
                alert(e.response.data.error)
            }
        }


    public render() {
        return (
            <div>
                <section className='addVacation'>
                    <div className="addVacation">
                        <h4>Vacations Adder</h4>
                        <p>add new vacation</p>
                        <form action="addVacation">
                        <input type="text" placeholder="destination" onChange={this.setDestination} required/><br />
                        <input type="text" placeholder="description" onChange={this.setDescription} required/><br />
                        <label htmlFor="startDate">startDate</label><br />
                        <input type="date" name="startDate" min={new Date().toISOString().split("T")[0]} onChange={this.setStartDate} required/><br />
                        <label htmlFor="endDate">endDate</label><br />
                        <input type="date" name="endDate"  min={new Date(this.state.startDate).toISOString().split("T")[0]} onChange={this.setEndDate} required /><br />
                        <input type="number" placeholder="price" onChange={this.setPrice} required/><br />
                        <input type="text" placeholder="image url"  onChange={this.setImageUrl} required />
                        <input type="submit" value="submit" onClick={this.addVacation}  />
                   </form> </div>
                    <input type="button" id="discardChanges" value="discard changes" />
                </section>
            </div>
        );
    }
}