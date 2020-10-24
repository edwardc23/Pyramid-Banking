import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";

class Checking extends Component{
    constructor(props) {
        super(props);
        this.state = {

            checking: {
                accountNumber: '',
                balance: 0,
                name: ''
            },
            saving : {
                accountNumber: '',
                balance: 0,
                name: ''
            }
        }

    }


    componentDidMount() {
        setTimeout(()=>{
            this.findByChecking(this.props.checking);
            this.findBySaving(this.props.saving);
        },200)



    }


     findByChecking = (checkingAcct)=> {

         axios.post("http://localhost:8080/checkings/find", {checkingAcct}).then(res=> {
            console.log("res: " + JSON.stringify(res.data));
            return this.setState({checking :{
                    accountNumber: res.data['accountNumber'],
                    balance: res.data['balance'],
                    name: res.data['']
                }

            })
        })
    }

    findBySaving = () =>{

    }


    render(){

        return(

            <div className>
                <div className={"body-page"}>
                    <br />
                    <h2 style={{color:"white"}}>Checking</h2>
                    <h2 style={{color:"white"}}>ACCT: {this.state.checking.accountNumber}</h2>
                    <h2 style={{color:"white"}}>Balance: {this.state.checking.balance}</h2>

                </div>
            </div>
        )}
}
export default Checking

