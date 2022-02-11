import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";

export const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <HomeTemplate path="/home" exact Component={Home} />
                <HomeTemplate path="/contact" exact Component={Contact} />
                <HomeTemplate path="/news" exact Component={News} />
                {/* <Route path="/register" exact component={Register}/> */}

                <HomeTemplate path="/" exact Component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
