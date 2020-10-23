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
            this.findByChecking(this.props.checking);
            this.findBySaving(this.props.saving);



    }


     findByChecking = (checkingAcct)=> {
         console.log(checkingAcct)
         axios.post("http://localhost:8080/checkings/find", {checkingAcct}).then(res=> {
            // console.log("res: " + JSON.stringify(res));
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


    render(){

        return(

            <div className>
                <div className={"body-page"}>
                    <br/>
                    <h2 style={{color:"white"}}>Checking: {this.props.checking}</h2>
                    <h2 style={{color:"white"}}>ACCT: {this.state.checking.accountNumber}</h2>

                </div>
            </div>
        )}
}
export default Checking

