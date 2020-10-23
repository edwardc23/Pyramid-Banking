import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {

            username: this.props.match.params.username

        }
    }

    findByUsername = (username) =>{

    }





    render() {

        return(

            <div className>
                <HeaderComponent/>
                <div className={"body-page"}>
                    <h2 style={{color: "white"}}>hi: {this.state.username}</h2>
                </div>
            </div>
        )}
}export default Homepage
