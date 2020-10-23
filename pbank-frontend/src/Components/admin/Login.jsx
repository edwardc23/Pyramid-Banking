import React from 'react'
import { Component } from "react"
import ControllerDataServices from '../../services-HTTP/ControllerDataServices'
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            test: ''
            
        }
   

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.testP = this.testP.bind(this)
    }

    testP(){
        if(this.state.test==='Success')
        {
            this.props.history.push(`/Homepage/${this.state.username}`)

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

    handleSubmit(event){
        let user = {
            username: this.state.username,
            password: this.state.password
            
        }
        event.preventDefault()
        //console.log(user)
        ControllerDataServices.check(user)
        .then(value => {
            this.setState({test: value.data})
            //console.log(this.state.test)
            this.testP()
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Username:</p>
                <input type="text" className="text-input" value={this.state.username} onChange={this.handleUsernameChange}/>
                <p>Password:</p>
                <input type="text" className="text-input" value={this.state.password} onChange={this.handlePasswordChange}/>
                <br></br>
                <button className='btn btn-link'>Submit</button>
                
            </form>
            
        );
    }
    
}export default Login
