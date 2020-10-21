import React from 'react'
import {Link} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

function Homepage(){
    return(
        
        <div className="container">
            <HeaderComponent/>
            <div>
                <button className= "bottomleft" style={{color: "black", textAlign: "center",height:"200px",width:"500px"}} type ="button"><Link to="/Study">Study</Link></button>
                <button className= "bottomright" style={{color: "black", textAlign: "center",height:"200px",width:"500px"}} type ="button"><Link to="/CardManager">Manage</Link></button>
            </div>
        </div>
    )
}export default Homepage