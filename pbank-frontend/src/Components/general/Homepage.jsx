import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";
import Checking from "./Checking";
import Saving from "./Saving";
import {Link} from "react-router-dom";


class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {

            username: this.props.match.params.username,
            user: {
                userName: '',
                password: '',
                full: '',
                saving: '',
                checking: ''
            },
            checking: {
                accountNumber: '',
                balance: 0,
                name: ''
            },
            saving : {
                accountNumber: '',
                balance: 0,
                name: ''
            },
            loaded: false
        }

    }


     componentDidMount() {
         this.findByUsername(this.state.username);


    }


    findByUsername = (username) =>{
        axios.post("http://localhost:8080/returnUser", {username}).then(res=> {

            return this.setState({user: {
                    userName: res.data['userName'],
                    password: res.data['password'],
                    full: res.data['full'],
                    saving: res.data['saving'],
                    checking: res.data['checking']
                }});
        });

    }



    render() {

        return(
            <div className>
                <HeaderComponent/>
                <div className={"body-page"}>
                    <h2 style={{color: "white"}}>Name: {this.state.user.full}</h2>
                    <h2 style={{color: "white"}}>User: {this.state.user.userName}</h2>
                      <div>
                        <container style={{align:"left",float:"left"}}>
                            <button className={"checking"} >
                                <Link to={{ pathname: '/Checking', state: {checking: this.state.user.checking}  }}>Checking</Link>
                            </button>
                        </container>


                        <container style={{float:"right",align:"left"}}>
                            <button className={"saving"}>
                                <Link to={{ pathname: '/Saving', state: {saving: this.state.user.saving} }}>Saving</Link>
                            </button>
                        </container>
                        </div>

                </div>
            </div>
        )}
}export default Homepage
