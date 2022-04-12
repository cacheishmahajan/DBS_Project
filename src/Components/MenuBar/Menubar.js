import { useState } from "react"
import { NavLink } from 'react-router-dom'

const Menubar = ({onmouseover,onmouseout,dropdown}) => {

  const [profile,setprofile] = useState('https://img.icons8.com/ios/50/000000/cat-profile.png');
  
  return (

      <div id = 'Menubar'>
        <div className="userID">
          <img src = {profile}  alt="user-profile-img"/>         
        </div>
        <div >
        <button className = "drop_button" onMouseOver={onmouseover}  type="button" >
        <span  class="dropdown-arrow"> {dropdown ? "▲":"▼"}</span></button>
        {dropdown && (
        <div onMouseLeave = {onmouseout} class="dropdown" >
        {/* <NavLink className = "no-style" to = "/settings">
        <div  className = "itemlist"><p className = "Litext"> View Settings</p></div>
        </NavLink> */}
        {/* <div  className = "itemlist"> <p  className = "Litext"> Profile Picture</p></div> */}
        {/* <div  className = "itemlist"> <p  className = "Li
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        .text"> Add Account</p></div> */}
        <NavLink className = "no-style" to = "/bank-details">
        <div  className = "itemlist"><p  className = "Litext"> Bank Details</p></div>
        </NavLink>
        <NavLink className = "no-style" to = "/">
        <div  className = "itemlist"><p  className = "Litext"> Logout</p></div>
        </NavLink>
        </div>
        )
        }
        </div>
        <NavLink className="no-style" to ="/sell">
        <div className="MenuList"><p className = "menu"  >Sell 💰</p></div>
        </NavLink>

        <NavLink className="no-style" to ="/wishlist" >
        <div className="MenuList"><p className = "menu"> Wishlist ❤︎</p></div>
        </NavLink>

        <NavLink className="no-style" to ="/purchaseHistory" >
        <div className="MenuList"><p className = "menu"> Purchase History 🧾</p></div>
        </NavLink>
        
        
        
    </div>
  )
}

export default Menubar