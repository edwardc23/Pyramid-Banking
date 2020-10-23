import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";
import Checking from "./Checking";

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
        // setTimeout(()=> {
        //      this.findByChecking(this.state.user.checking);
        //      this.findBySaving(this.state.user.saving);
        //
        // },500);

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

     findByChecking(checking) {
         axios.post("http://localhost:8080/checkings/find", {checking}).then(res=> {
            console.log("res: " + res.data);
            return this.setState({checking :{
                    accountNumber: res.data['accountNumber'],
                    balance: res.data[''],
                    name: res.data['']
                }

            })
        })
    }

    findBySaving = () =>{

    }





    render() {

        return(

            <div className>
                <HeaderComponent/>
                <div className={"body-page"}>
                    <h2 style={{color: "white"}}>Name: {this.state.user.full}</h2>
                    <h2 style={{color: "white"}}>User: {this.state.user.userName}</h2>
                    <h2 style={{color: "white"}}>Checking: {this.state.user.checking}</h2>
                    <h2 style={{color: "white"}}>Saving: {this.state.user.saving}</h2>
                    <br/>
                    <Checking saving={this.state.user.saving} checking={this.state.user.checking} />

                </div>
            </div>
        )}
}export default Homepage
