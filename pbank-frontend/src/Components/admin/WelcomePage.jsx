import React from 'react'
import {Link} from 'react-router-dom'
import PyramidWelcome from "../../Resources/Pyramid_Consulting_Horz.png";
function WelcomePage(){
    return(
        <div className={"welcome"} >

            <button className='btn-default' style={{color: "black",marginLeft: "85%"}} type="button"><Link to="/Login">Login</Link></button> 
            <button className='btn-default' style={{color: "black"}} type="button"><Link to="/Register">New User</Link></button>
            <img src={PyramidWelcome} alt={"pyramid welcome"} style={{height:100,width:500}}/>
            <br/><br/><br/><br/>
            <div className="container" style={{height:"150px",fontSize:"80px",backgroundColor:"#FCB712"}}>
                    P y r a m i d &emsp; B a n k i n g
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
         
            <div>
            <br/>
       
            </div>
        </div>  
        </div>
      
    )

}
export default WelcomePage