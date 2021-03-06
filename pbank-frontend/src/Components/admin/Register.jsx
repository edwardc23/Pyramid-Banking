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
        this.addAccounts(user)


        this.props.history.push(`/Homepage/${this.state.username}`)
    }
    addAccounts(user){
        if(user.savingAcct==="Yes"){
        ControllerDataServices.addSaving(user)
        }
        if(user.checkingAcct==="Yes")
        {
            ControllerDataServices.addChecking(user)
        }
        }
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
        let save=''
        if(this.state.savingAcct==='No'){ save='Yes'}
        else{save='No'}
        console.log(save)
        this.setState({
            savingAcct: save
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


        event.preventDefault()

        this.testP(user)

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



