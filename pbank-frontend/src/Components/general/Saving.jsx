import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";

class Saving extends Component{
    constructor(props) {
        super(props);
        this.state = {

            saving : {
                accountNumber: '',
                balance: 0,
                name: ''
            }
        }

    }


     componentDidMount() {
        setTimeout(()=>{
            this.findBySaving(this.props.saving);
        },200)


    }


    findBySaving = (savingAcct) =>{
        axios.post("http://localhost:8080/savings/find", {savingAcct}).then(res=> {
            console.log("saving res: " + JSON.stringify(res.data));
            console.log(savingAcct)
            return this.setState({saving :{
                    accountNumber: res.data['accountNumber'],
                    balance: res.data['balance'],
                    name: res.data['']
                }

            })
        })
    }


    render(){

        return(

            <div className>
                <div className={"body-page"}>
                    <h2 style={{color:"white"}}>Saving</h2>
                    <h2 style={{color:"white"}}>ACCT: {this.state.saving.accountNumber}</h2>
                    <h2 style={{color:"white"}}>Balance: {this.state.saving.balance}</h2>
                </div>
            </div>
        )}
}
export default Saving

