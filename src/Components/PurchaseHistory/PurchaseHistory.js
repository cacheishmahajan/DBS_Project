import { useState } from "react";
import MenuBar from "../MenuBar/Menubar";
import BidItem from "../BidItem/BidItem";

const PurchaseHistory = ({purchaseHistory}) => {
  
      // State for dropdown menu
    const[dropdown,setdropdown] = useState(false);

    // method for altering dropdown state
    const menudown = () => {
    setdropdown(true)  
    }

    const menuup = () =>{
    setdropdown(false)
    }


    return (
        <div>
        <MenuBar onmouseover = {menudown} onmouseout = {menuup} dropdown = {dropdown}/>
        
        {purchaseHistory.map((item) => (
        <BidItem  img = {item.image} name = {item.name} description = {item.description} bidprice = {item.bidprice} location = {item.Location} removefromwishlist = {item.removefromwishlist} defaultheartstate = {true} flag = {true} />
        ))}
        
        </div>
      )
  
}

export default PurchaseHistory