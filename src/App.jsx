import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import "./style.scss"
import "bootstrap"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import  Alert  from "./components/Alert";
import {AlertState} from "./context/alert/AlertState.jsx"
import {GithubState} from "./context/github/GitHubState"

export default props => {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Nav/>
                    <div className={"container pt-4"}>
                        <Alert/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile/:name" component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>     
    )
}