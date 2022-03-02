import React, { Suspense } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Detail from "./pages/Detail/Detail";
import Booking from "./pages/Booking/Booking";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import { BookingTemplate } from "./templates/BookingTemplate/BookingTemplate";
import HistoryBooking from "./pages/Booking/HistoryBooking";
import Loading from "./components/Loading/Loading";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/ShowTime/ShowTime";
import AddFilms from "./pages/Admin/Films/AddFilms";
import EditFilm from "./pages/Admin/Films/EditFilm";
import EditDashboard from "./pages/Admin/Dashboard/EditDashboard";
import AddDashboard from "./pages/Admin/Dashboard/AddDashboard";

export const history = createBrowserHistory();
function App() {
    return (
        <Router history={history}>
            <Loading />
            <Switch>
                <HomeTemplate path="/" exact Component={Home} />
                <HomeTemplate path="/home" exact Component={Home} />
                <HomeTemplate path="/contact" exact Component={Contact} />
                <HomeTemplate path="/news" exact Component={News} />
                <HomeTemplate path="/detail/:id" exact Component={Detail} />
                <UserTemplate path="/login" exact Component={Login} />
                <UserTemplate path="/register" exact Component={Register} />
                <BookingTemplate
                    path="/booking/:id"
                    exact
                    Component={Booking}
                />
                <BookingTemplate
                    path="/historybooking"
                    exact
                    Component={HistoryBooking}
                />
                <AdminTemplate path="/admin" exact Component={Dashboard} />
                <AdminTemplate path="/admin/user" exact Component={Dashboard} />
                <AdminTemplate
                    path="/admin/user/editdashboard/:id"
                    exact
                    Component={EditDashboard}
                />
                <AdminTemplate
                    path="/admin/user/adddashboard"
                    exact
                    Component={AddDashboard}
                />
                <AdminTemplate
                    path="/admin/films/films"
                    exact
                    Component={Films}
                />
                <AdminTemplate
                    path="/admin/films/addfilms"
                    exact
                    Component={AddFilms}
                />
                <AdminTemplate
                    path="/admin/films/editfilm/:id"
                    exact
                    Component={EditFilm}
                />
                <AdminTemplate
                    path="/admin/showtime/:id/:tenphim"
                    exact
                    Component={ShowTime}
                />
            </Switch>
        </Router>
    );
}

export default App;
