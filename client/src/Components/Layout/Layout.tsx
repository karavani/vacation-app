import React, { Component } from "react";
import './Layout.css';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import adminPage from "../admin/adminPage";
import editVacation from "../admin/editVacation";
import addVacation from "../admin/addVacation";
import vacation from "../Vacations/vacations";
import Reports from "../admin/chart";

export default class Layout extends Component {
    public render() {
        return (
            <BrowserRouter>
                <section className="layout">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Switch>
                            <Route path='/home' component={vacation} exact />
                            <Route path='/login' component={Login} exact />
                            <Redirect from="/" to="/login" exact />
                            <Route path="/register" component={Register} exact />
                            <Route path="/admin" component={adminPage} exact />
                            <Route path="/admin/edit" component={editVacation} exact />
                            <Route path="/admin/add" component={addVacation} exact />
                            <Route path="/reports" component={Reports} exact />
                            {/* {<Route component={PageNotFound} />} */}
                        </Switch>
                    </main>

                    <footer>
                        <Footer />
                    </footer>
                </section>
            </BrowserRouter>

        );
    }
}