import React, {Component} from 'react'

import axios from "axios";


class Checking extends Component{
    constructor(props) {
        super(props);
        this.state = {

            checking: {
                accountNumber: '',
                balance: 0,
                name: ''
            }
        }


    }


     componentDidMount() {
        console.log(this.props.checking)
        setTimeout(()=>{
            this.findByChecking(this.props.checking)


        },500)


    }

    //
    findChecking(account)
    {

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
    //
    // findBySaving = (savingAcct) =>{
    //     axios.post("http://localhost:8080/savings/find", {savingAcct}).then(res=> {
    //         console.log("res: " + JSON.stringify(res.data));
    //         return this.setState({saving :{
    //                 accountNumber: res.data['accountNumber'],
    //                 balance: res.data['balance'],
    //                 name: res.data['']
    //             }
    //
    //         })
    //     })
    // }


    render(){


        return(

            <div className>
                <div className={"body-page"}>

                    <br />
                    <h2 style={{color:"white"}}>Checking</h2>
                    <h2 style={{color:"white"}}>ACCT: {this.state.checking.accountNumber}</h2>
                    <h2 style={{color:"white"}}>Balance: {this.state.checking.balance}</h2>

                    {/*<br />*/}
                    {/*<h2 style={{color:"white"}}>Saving</h2>*/}
                    {/*<h2 style={{color:"white"}}>ACCT: {this.state.saving.accountNumber}</h2>*/}
                    {/*<h2 style={{color:"white"}}>Balance: {this.state.saving.balance}</h2>*/}
                </div>
            </div>
        )}
}
export default Checking

