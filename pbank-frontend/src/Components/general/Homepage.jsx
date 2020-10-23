import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import axios from "axios";

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {

            username: this.props.match.params.username,
            user: {
                userName: '',
                password: '',
                full: '',
                saving: '',
                checking: ''
            }
        }

    }
    componentDidMount() {
        this.findByUsername(this.state.username);
        this.findByChecking(this.state.user.checking);
        this.findBySaving(this.state.user.saving);

    }


    findByUsername = (username) =>{
        axios.post("http://localhost:8080/returnUser", {username}).then(r=> {

            return this.setState({user: {
                    userName: r.data['userName'],
                    password: r.data['password'],
                    full: r.data['full'],
                    saving: r.data['saving'],
                    checking: r.data['checking']
                }});
        });

    }

    findByChecking = () =>{

    }

    findBySaving = () =>{

    }





    render() {

        return(

            <div className>
                <HeaderComponent/>
                <div className={"body-page"}>
                    <h2 style={{color: "white"}}>Name: {this.state.user.full}</h2>
                    <h2 style={{color: "white"}}>User: {this.state.user.userName}</h2>
                    <h2 style={{color: "white"}}>Checking: {this.state.user.saving}</h2>
                    <h2 style={{color: "white"}}>Saving: {this.state.user.checking}</h2>

                </div>
            </div>
        )}
}export default Homepage
