import BidItem from "../BidItem/BidItem.js"
import { useState } from "react"
import MenuBar from "../MenuBar/Menubar.js"

const Wishlist = ({wishlist}) => {

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
        {/* <div className="wishlist"> */}
        {wishlist.map((item) => (
        <BidItem  img = {item.image} name = {item.name} description = {item.description} bidprice = {item.bidprice} location = {item.Location} removefromwishlist = {item.removefromwishlist} defaultheartstate = {true} flag = {true} />
        ))}
        {/* </div> */}
        </div>
      )
}

export default Wishlist