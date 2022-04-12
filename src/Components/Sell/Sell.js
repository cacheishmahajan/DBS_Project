import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Slider from "../Slider/Slider";
import Images from "../../images";
import "./Sell.css";
import {useState} from 'react';

const currencies = [
  {
    value: "Home and Decor",
    label: "Home and Decor",
  },
  {
    value: "Furniture",
    label: "Furniture",
  },
  {
    value: "Art",
    label: "Art",
  },
  {
    value: "Collectibles",
    label: "Collectibles",
  },
  {
    value: "Jewellery",
    label: "Jewellery"
  },
  {
    value: "Coins",
    label: "Coins"
  },
  {
    value: "Antiques",
    label: "Antiques"
  }
];

const Sell = () => {

  const [image,setimage] = useState(undefined);
  const [name,setname] = useState("");
  // const[category,setcategory] = useState("");
  const[description,setdescription] = useState("");
  const[min_bid_price,setminbidprice] = useState("");
  // const[current_bid,setcurrentbid] = useState(0);
  const[start_date,setstartdate] = useState("");
  const[end_date,setenddate] = useState("");



  const onClick = (e) =>
  {   e.preventDefault();
    console.log(image);
      if(image === undefined || name === "" || currency === "" || description === "" || min_bid_price === "" || start_date === "" || end_date === "")
      {
        alert("Please do not leave any field empty!");
      }
      
      else
      {
        const data = 
        {
        image: "",
        name : name,
        category: "lol",
        description: description,
        min_bid_price: min_bid_price,
        current_bid: 0,
        start_date: start_date,
        end_date: end_date
      }

       fetch("http://localhost:5000/selldetails",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data),
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

    setimage(undefined);
    setname("");
    setCurrency("");
    setdescription("");
    setminbidprice("");
    // setcurrentbid("");
    setstartdate("");
    setenddate("");

  }
  
  
  }

    
  
  const [currency, setCurrency] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
    <Slider images={Images} />
    <div className="sell-container">
    <h1>List Item Details</h1>
      <div className="sell-form">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {/* <div>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Location" variant="outlined" />
          </div> */}
          <div>
            <TextField
              value={name}
              onChange={(e) => setname(e.target.value)}
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
            />
            <TextField
               value={min_bid_price}
               onChange={(e) => setminbidprice(e.target.value)}
              id="outlined-basic"
              label="Minimum Bid Price"
              variant="outlined"
            />
          </div>
          <TextField
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              id="outlined-basic"
              label="Item Description"
              helperText="*At max 1000 characters long"
              variant="outlined"
              fullWidth
              multiline
            />
          <div>
          <TextField
             value={start_date}
             onChange={(e) => setstartdate(e.target.value)}
              id="outlined-basic"
              label="Bid Start Date"
              variant="outlined"
            />
            <TextField
               value={end_date}
               onChange={(e) => setenddate(e.target.value)}
              id="outlined-basic"
              label="Bid End Date"
              variant="outlined"
            />
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <TextField
              value={currency}
              id="outlined-select-currency"
              select
              label="Category"
              value={currency}
              onChange={handleChange}
              helperText="Please select the category"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <label style={{color:"rgb(99, 8, 5)"}}>
              <strong>Upload Image:</strong>{" "}
            </label>
            <input id="image-file" onChange={()=> {setimage(document.getElementById('image-file'))}} type="file" accept="image/*" />
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button onClick = {onClick} className="submit">Submit</button>
          </div>
        </Box>
      </div>
    </div>
    </div>
  );
};

export default Sell;
