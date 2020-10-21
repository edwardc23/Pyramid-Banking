import  React from 'react'
import {Component} from 'react'
import ControllerDataServices from '../../services-HTTP/ControllerDataServices'
class Register extends Component{
    constructor (props){
        super(props)
            this.state = {
                username: '',
                password: '',
                duplicate: ''

            }
            this.handleUsernameChange = this.handleUsernameChange.bind(this)
            this.handlePasswordChange = this.handlePasswordChange.bind(this)
            this.handlePasswordDup = this.handlePasswordDup.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.testP = this.testP.bind(this)
        
    }
    testP(user)
    {
            ControllerDataServices.addAdmin(user)
            this.props.history.push('/Homepage')   
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
    handlePasswordDup(event) {
        this.setState({
        duplicate: event.target.value
        })
        // console.log(this.state.password)
    }
    handleSubmit(event){
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        event.preventDefault()
        if(this.state.password===this.state.duplicate)
        {this.testP(user)}
    }
render(){
    return(
        <form onSubmit= {this.handleSubmit}>
           <p>Username:</p> 
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                <br></br>
                <p>New Password:</p>
                <input type="text"value={this.state.password} onChange={this.handlePasswordChange}/>
                <br></br>
                <p>Repeat New Password:</p>
                <input type="text"value1={this.state.duplicate} onChange={this.handlePasswordDup}/>
                <br></br><br></br>
                
                <button>Submit</button> 
        </form>
    )
}
}export default Register
