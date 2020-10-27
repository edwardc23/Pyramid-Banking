import React from 'react'
import {Link} from 'react-router-dom'
function WelcomePage(){
    return(
        <div className={"welcome"} style={{backgroundColor:"#8e9aaf"}}>
            <button className='btn-default' style={{color: "black",marginLeft: "85%"}} type="button"><Link to="/Login">Login</Link></button> 
                <button className='btn-default' style={{color: "black"}} type="button"><Link to="/Register">New User</Link></button>
            <div className="container"style={{height:"150px", width:"1600px",fontSize:"100px",backgroundColor:"#FCB712"}}>
                
                    Pyramid Banking
                
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div>
         
            <div>
            <br></br>
       
            </div>
        </div>  
        </div>
      
    )

}
export default WelcomePage