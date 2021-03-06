import React, {Component} from'react'
import FooterComponent from '../general/FooterComponent'
import WelcomePage from '../admin/WelcomePage'
import Register from '../admin/Register'
import Homepage from '../general/Homepage'

import Login from '../admin/Login'
import Logout from '../admin/Logout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checking from "../general/Checking";
import Saving from "../general/Saving";

class RouterComponent extends Component{
    render()
    {
        return(
            <div>
                <Router>
                   
                        <Switch>
                            <Route exact path="/"><WelcomePage/></Route>
                            <Route path="/Login" component={Login}/>
                            <Route path="/Register" component={Register}/>
                            <Route path="/Homepage/:username" component={Homepage}/>
                            <Route path="/Logout" component={Logout}/>
                            <Route path="/Checking" component={Checking} />
                            <Route path="/Saving" component={Saving} />
                        </Switch>

                    <FooterComponent />
                </Router>
            </div>
        )
    }
}
export default RouterComponent;
