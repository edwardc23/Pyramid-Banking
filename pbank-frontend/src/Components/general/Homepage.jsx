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
    }


    findByUsername = (username) =>{

        axios.post("http://localhost:8080/returnUser", {username}).then(r=>{
            console.log("r " + r.data)
            this.state.user = r.data;

        });
        console.log(this.state.user);
    }





    render() {

        return(

            <div className>
                <HeaderComponent/>
                <div className={"body-page"}>
                    <h2 style={{color: "white"}}>hi: {this.state.username}, {this.state.user.full}</h2>
                </div>
            </div>
        )}
}export default Homepage
