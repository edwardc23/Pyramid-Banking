import React from 'react'


function HeaderComponent(){
    return(
        <div>
            <nav className="navbar navbar-expand-md " style={{backgroundColor:"whitesmoke"}}>
 
  <a className="navbar-brand" href="/Homepage">Pyramid Banking</a>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">

      <li className="nav-item">
        <a className="nav-link" href="/Logout">Logout</a>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    )
}
export default HeaderComponent;