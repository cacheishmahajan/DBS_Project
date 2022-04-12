import { useState } from "react";
import blankheart from "../../Images/icons8-heart-50.png"
import redheart from "../../Images/icons8-heart-red-50.png"
import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
// import { isWindows } from "nodemon/lib/utils";

const BidItem = ({statehandle,img , name ,category, description  ,current_bid, min_bid_price ,location ,start_date,end_date,sold ,defaultheartstate,flag}) => {
  const [heartstate,setheartstate] = useState({defaultheartstate})
  const [addtowishlist,setaddtowishlist] = useState(false)
  const [removefromwishlist,setremovefromwishlist] = useState(false)
  
  const date = new Date();
  const [currentDate,setcurrentDate] = useState(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

  statehandle()


  const onClick = () =>
  {
    window.location.assign("http://localhost:3000/itemdetails");
  }


  //updating current date
  // const setTime = ({date}) =>
  // {

  //   setcurrentDate(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  //   // const hours = date.getHours();
  //    console.log(hours);
  
  
  // }

  
  React.useEffect(() => {
    setTimeout(() => {
     const date = new Date();
     setcurrentDate(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    //  setTime(new Date());
    console.log(currentDate);
    }, 1000);
     
  });
  
    const wishlist = () =>{
      setheartstate(!heartstate)
      setremovefromwishlist(heartstate)
      // {heartstate && setremovefromwishlist(true) }
      setaddtowishlist(!heartstate)
      setTimeout(() => { setaddtowishlist(false); }, 2000)
      setTimeout(() => { setremovefromwishlist(false); }, 2000)
    }

    

    return (
      <div className="bid-item" style={ !heartstate && flag? {display:"none"}:{display:"block"}}>
       <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src = {img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          <p className="card-description">{description}</p>
          <p>Current Bidding price : <b> {min_bid_price}</b></p>
          <p>{location}  </p>
        </MDBCardText>
        {!sold ? 
        (
        
        <div className="place-bid-button-container">
        <button onClick = {onClick} className="place-bid-button" href = "#">BID 🔨</button> 
        </div>
       

        ):<p>Sold Out!</p>}
        <div onClick = {wishlist}>
        {!sold && <img  className="Heart-icon" src={heartstate ? redheart: blankheart} alt = "heart"/>}
        {addtowishlist && <p>Your item has been added to the wishlist!</p>}
        {removefromwishlist && <p>Your item has been removed from the wishlist!</p>}
        </div>
      </MDBCardBody>
    </MDBCard>
    </div>  
  )
}

export default BidItem