import { useState } from "react";
import "../assets/Navbar.css" ;

function Navbar() {
const [clickState,setClickState] = useState(false);
const handleClick = () => {
  setClickState(!clickState);
}

return (  
  <div>
    <div className="navbar teal black-text">
      <div className="navbar-logo left">
        <h5>Mariana Sky</h5>
      </div>
      <div className="navbarulcontainer right">
        <div className="hidden-menu black-text" onClick={handleClick}>
        <i className="Small material-icons">dehaze</i>
        </div>
        
        <ul className={clickState?"newbarulinactive black-text":"newbarul"}>
          <li className="newbarulli"><a href="/">Home</a></li>
          <li className="newbarulli"><a href="/media">What's New</a></li>
          <li className="newbarulli"><a href="/qps">Question Papers</a></li>
          <li className="newbarulli"><a href="#">About Us</a></li>
        </ul>
      </div>
    </div>
</div>
  )
}

export default Navbar
