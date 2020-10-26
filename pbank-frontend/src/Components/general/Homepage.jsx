import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";
import Checking from "./Checking";
import Saving from "./Saving";

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
        const check=this.state.user.checking
        return(
            <div className>
                <HeaderComponent/>
                <div className={"body-page"}>
                    <h2 style={{color: "white"}}>Name: {this.state.user.full}</h2>
                    <h2 style={{color: "white"}}>User: {this.state.user.userName}</h2>
                    <h2 style={{color: "white"}}>Checking: {this.state.user.checking}</h2>
                    <h2 style={{color: "white"}}>Saving: {this.state.user.saving}</h2>
                    <Checking checking= {this.state.user.checking} />
                    <Saving saving= {this.state.user.saving} />

                </div>
            </div>
        )}
}export default Homepage
