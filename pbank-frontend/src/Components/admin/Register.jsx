import  React from 'react'
import {Component} from 'react'
import ControllerDataServices from '../../services-HTTP/ControllerDataServices'
class Register extends Component{
    constructor (props){
        super(props)
            this.state = {
                username: '',
                password: '',
                savingAcct:'No',
                checkingAcct:'No',
                fullName: ''

            }
            this.handleUsernameChange = this.handleUsernameChange.bind(this)
            this.handlePasswordChange = this.handlePasswordChange.bind(this)
            this.handleFull = this.handleFull.bind(this)
            this.handleSavingsChange = this.handleSavingsChange.bind(this)
            this.handleCheckingChange = this.handleCheckingChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.testP = this.testP.bind(this)
            this.addAccounts = this.addAccounts.bind(this)
        
    }
    testP(user)
    {
        console.log(user)
            ControllerDataServices.addAdmin(user)

            //this.props.history.push('/Homepage')
    }
    addAccounts(acct){if(acct.savingAcct==="Yes"){ControllerDataServices.addSaving(acct)}
        if(acct.checkingAcct==="Yes"){ControllerDataServices.addChecking(acct)}}
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
         //console.log(this.state.username)
    }

    handlePasswordChange(event) {
        this.setState({
        password: event.target.value
        })
        // console.log(this.state.password)
    }
    handleSavingsChange(){
        let check1=''
        if(this.state.savingAcct==='No'){ check1='Yes'}
        else{check1='No'}
        console.log(check1)
        this.setState({
        savingAcct: check1
    })
    }
    handleCheckingChange(){
        let check=''
        if(this.state.savingAcct==='No'){ check='Yes'}
        else{check='No'}
        this.setState({
        checkingAcct: check
    })}
    handleFull(event) {
        this.setState({
        fullName: event.target.value
        })
        // console.log(this.state.password)
    }
    handleSubmit(event){
        let user = {
            username: this.state.username,
            password: this.state.password,
            fullName: this.state.fullName,
            savingAcct: this.state.savingAcct,
            checkingAcct: this.state.checkingAcct

        }
        let acct = {
            fullName: this.state.fullName,
            savingAcct: this.state.savingAcct,
            checkingAcct: this.state.checkingAcct
        }

        event.preventDefault()

        this.testP(user)
        this.addAccounts(acct)
        this.props.history.push('/Homepage')
    }
render(){
    return(
        <div className={"register-page"}>
            <form onSubmit= {this.handleSubmit}>
               <p>Username:</p>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    <br/>
                    <p>New Password:</p>
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br/>
                    <p>Full Name:</p>
                    <input type="text" value={this.state.fullName} onChange={this.handleFull}/>
                    <br/>

                <input type="checkbox"  id="checkingAcct" value="Yes" onClick={this.handleCheckingChange}/>
                    <label htmlFor="checking"> Checking Acct</label>
                    <br/>

                <input type="checkbox" id="savingsAcct" value="Yes" onClick={this.handleSavingsChange} />
                    <label htmlFor="savings"> Savings Acct</label>
                    <br/>
                    <button>Submit</button>
            </form>
        </div>
    )
}
}export default Register
