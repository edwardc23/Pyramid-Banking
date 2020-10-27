import React, {Component} from 'react'

import axios from "axios";


class Checking extends Component{
    constructor(props) {
        super(props);
        this.state = {

            checking: {
                id: '',
                accountNumber: this.props.location.state.checking,
                balance: 0,
                name: ''
            },
            withAmt: 0,
            depAmt: 0
        }


    }


     componentDidMount() {
         console.log(this.state.checking.accountNumber)
        // setTimeout(()=>{
            this.findByChecking(this.state.checking.accountNumber)


        // },5000)


    }

    //
    findChecking(account)
    {

    }
     findByChecking = (checkingAcct)=> {

         axios.post("http://localhost:8080/checkings/find", {checkingAcct}).then(res=> {
            console.log("res: " + JSON.stringify(res.data));
            return this.setState({
                checking: {
                    id: res.data['id'],
                    accountNumber: res.data['accountNumber'],
                    balance: res.data['balance'],
                    name: res.data['']
                }

            })
        })
    }

    deposit = (event) => {
        event.preventDefault();
        console.log(this.state.depAmt);
        console.log(this.state.checking.id);
        let amt = this.state.depAmt;
        axios.post(`http://localhost:8080/checkings/deposit/${this.state.checking.id}`,{amt})
            .then(r => {
                console.log(amt)
                console.log(r.data)
                this.setState({ checking: {
                    accountNumber: r.data['accountNumber'],
                    balance: r.data['balance']
                }})
            });
        window.location.reload(true);

    }

    withdraw = (event) => {
        event.preventDefault();
        console.log(this.state.withAmt);
        console.log(this.state.checking.id);
        let amt = this.state.withAmt;
        axios.post(`http://localhost:8080/checkings/withdraw/${this.state.checking.id}`,{amt})
            .then(r => {
                console.log(amt)
                console.log(r.data)
                this.setState({ checking: {
                        accountNumber: r.data['accountNumber'],
                        balance: r.data['balance']
                    }})
            });

        window.location.reload(true);
    }

    handleDepChange = (e) =>{
        this.setState({depAmt: e.target.value})
    }

    handleWithChange = (e) =>{
        this.setState({withAmt: e.target.value})
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
                    <form>
                        <input type="number"
                               onChange={this.handleWithChange}
                               placeholder={this.state.withAmt}/>
                        <button onClick={this.withdraw}>Withdraw</button>
                    </form>
                    <br />
                    <form>
                        <input type="number"
                               onChange={this.handleDepChange}
                               placeholder={this.state.depAmt}
                               />
                        <button onClick={this.deposit}>Deposit</button>
                    </form>
                    {/*<br />*/}
                    {/*<h2 style={{color:"white"}}>Saving</h2>*/}
                    {/*<h2 style={{color:"white"}}>ACCT: {this.state.saving.accountNumber}</h2>*/}
                    {/*<h2 style={{color:"white"}}>Balance: {this.state.saving.balance}</h2>*/}
                </div>
            </div>
        )}
}
export default Checking

