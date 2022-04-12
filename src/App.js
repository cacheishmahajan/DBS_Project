import axios from 'axios'
import {useState,useEffect} from 'react';
import Slider from "./Components/Slider/Slider"
import Images from "./images";
import Login from "./Components/Login/Login";
import Sell from "./Components/Sell/Sell";
import BankDetails from "./Components/BankDetails/BankDetails";
import Settings from "./Components/Settings/Settings";
import Homepage from './Components/Homepage/Homepage';
import WishList from "./Components/Wishlist/Wishlist";
import itemDetails from './Components/ItemDetails/ItemDetails';
import PurchaseHistory from './Components/PurchaseHistory/PurchaseHistory';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ItemDetails from './Components/ItemDetails/ItemDetails';


function App() {

  const[biditems,setbiditems] = useState([]);

  useEffect( () => {
    const config = {
      url: "http://localhost:5000",
      method: "get",
      headers: {
          'Content-Type': 'application/json',
      },
    }

    axios(config)
    .then(function (response) {
      if (response.data) {
        console.log(response.data);
        setbiditems(response.data);
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  },[]);

  const[wishlist,setwishlist] = useState([
    // fetch from database
       ]);

  const[purchaseHistory,setpurchaseHistory] = useState([
    // fetch from database
           ]);

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
             <Route path="/" element={<Login/>}/>
             <Route path="/bank-details" element={<BankDetails/>} />
             <Route path="/sell" element={<Sell/>} />
             <Route path="/settings" element={<Settings/>} />
             <Route path="/home" element={<Homepage biditems = {biditems}/>} />
             <Route path="/wishlist" element={<WishList wishlist = {wishlist}/>} />
             <Route path="/purchaseHistory" element = {<PurchaseHistory purchaseHistory = {purchaseHistory}/>}/>
             <Route path="/itemdetails" element = {<ItemDetails />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
