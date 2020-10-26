import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";

class Saving extends Component{
    constructor(props) {
        super(props);
        this.state = {

            saving : {
                id:'',
                accountNumber: this.props.location.state.saving,
                balance: 0,
                name: ''
            },
            withAmt: 0,
            depAmt: 0
        }

    }


     componentDidMount() {

        // setTimeout(()=>{
            this.findBySaving(this.state.saving.accountNumber);
        // },200)
         console.log(this.props.location.state)

    }


    findBySaving = (savingAcct) =>{
        axios.post("http://localhost:8080/savings/find", {savingAcct}).then(res=> {
            console.log("saving res: " + JSON.stringify(res.data));
            console.log(savingAcct)
            return this.setState({saving :{
                    id:res.data['id'],
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
        console.log(this.state.saving.id);
        let amt = this.state.depAmt;
        axios.post(`http://localhost:8080/savings/deposit/${this.state.saving.id}`,{amt})
            .then(r => {
                console.log(amt)
                console.log(r.data)
                this.setState({ saving: {
                        accountNumber: r.data['accountNumber'],
                        balance: r.data['balance']
                    }})
            });
         window.location.reload(true);

    }

    withdraw = (event) => {
        event.preventDefault();
        console.log(this.state.withAmt);
        console.log(this.state.saving.id);
        let amt = this.state.withAmt;
        axios.post(`http://localhost:8080/savings/withdraw/${this.state.saving.id}`,{amt})
            .then(r => {
                console.log(amt)
                console.log(r.data)
                this.setState({ saving: {
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



    render(){

        return(

            <div className>
                <div className={"body-page"}>
                    <h2 style={{color:"white"}}>Saving</h2>
                    <h2 style={{color:"white"}}>ACCT: {this.state.saving.accountNumber}</h2>
                    <h2 style={{color:"white"}}>Balance: {this.state.saving.balance}</h2>

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
                </div>
            </div>
        )}
}
export default Saving

