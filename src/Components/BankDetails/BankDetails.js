import React from "react";
import { TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';
import Slider from "../Slider/Slider";
import Images from "../../images";
import Box from "@mui/material/Box";
import "./BankDetails.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
// import { isWindows } from "nodemon/lib/utils";
// import { isWindows } from "nodemon/lib/utils";

const BankDetails = () => {

  // Storing bank account details
  const [accountHolder,setaccountHolder] = useState("");
  const [Account_number,setAccount_number] = useState("");
  const [Bank_name,setBank_name] = useState("");
  const [Bank_branch,setBank_branch] = useState("");

  //list of bank accounts
  const [bankDetails,setbankdetails] = useState([]);


  useEffect( () => {
    const config = {
      url: "http://localhost:5000/bankDetailsdata",
      method: "get",
      headers: {
          'Content-Type': 'application/json',
      },
    }

    axios(config)
    .then(function (response) {
      if (response.data) {
        console.log(response.data);
        setbankdetails(response.data);
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  },[]);


  //onSubmit
  const onSubmit = () => {

    if(accountHolder === "" || Account_number === "" || Bank_name === "" || Bank_branch === "")
    {
      alert("Please do not leave any field empty!");
    }
    // console.log(sessionStorage.getItem("userID"));
    else
    {let flag = false;
    for(let i = 0; i < bankDetails.length;i++)
    {
      if(bankDetails[i].Account_number === Account_number)
      {
        flag = true;
      }
    
    }

    if(!flag)
    {const data = {
      userID : sessionStorage.getItem("userID"),
      Account_number: Account_number,
      Bank_name : Bank_name,
      Bank_branch: Bank_branch,

    }

      fetch("http://localhost:5000/bankDetails",
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
      let temp = [{userID:sessionStorage.getItem("userID"),Account_number:`${Account_number}`,Bank_name:{Bank_name},Bank_branch:{Bank_branch}}];
      bankDetails.push(temp);
       window.location.replace( "http://localhost:3000/home");
    }

    else
    {
      flag = false;
      alert("You have already registered this account before! ");
    }
  }
  
  }
  //onSubmit ends

  
  return (
    <div>
    <Slider images={Images} />
    <div className="bank-details">
      <h1 style={{ marginBottom: "2rem", color: "white" }}>Bank Details</h1>
      <div className="bank-form">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              value={accountHolder}
              onChange={(e) => setaccountHolder(e.target.value)}
              id="outlined-basic"
              label="Account Holder"
              variant="outlined"
            />
            <TextField
             value={Account_number}
             onChange={(e) => setAccount_number(e.target.value)}
              id="outlined-basic"
              label="Account Number"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={Bank_name}
              onChange={(e) => setBank_name(e.target.value)}
              id="outlined-basic"
              label="Bank Name"
              variant="outlined"
            />
            <TextField
              value={Bank_branch}
              onChange={(e) => setBank_branch(e.target.value)}
              id="outlined-basic"
              label="Bank Branch"
              variant="outlined"
            />
          </div>
        </Box>
        {/* <NavLink to="/home" > */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="submit" onClick={onSubmit}>Submit</button>
        </div>
        {/* </NavLink> */}

        <NavLink to="/home" >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="skip" onSubmit={onSubmit}>Skip</button>
        </div>
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default BankDetails;
