import "./Login.css";
import axios from 'axios';
import { TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';
import Slider from "../Slider/Slider";
import Images from "../../images";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState,useEffect } from "react";

const Login = () => {
  const[users,setusers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userID, setuserID] = useState("");
  const [username, setusername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  // const [flag,setflag] = useState(false);

  useEffect( () => {
    const config = {
      url: "http://localhost:5000/userdata",
      method: "get",
      headers: {
          'Content-Type': 'application/json',
      },
    }

    axios(config)
    .then(function (response) {
      if (response.data) {
        console.log(response.data);
        setusers(response.data);
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  },[]);

  const [loginId, setloginID] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  const onRegisterClick = () => 
  
  {
    if (userID === "" || username === "" || city === "" || state === "" || country === "" || password === "") 
      {
      alert("You cannot leave the field empty!!!!!");
      }

    else
      {
        let flag = false;
        for(let i=0;i<users.length;i++){
          if(users[i].userID === userID){
          alert('User already exists');
          flag = true;
          }
        }
            if(!flag){
            alert("You have been successfully registered!");
            //adds user to the database
            const data = {
              userID:userID,
              username: username,
              password:password,
              city:city,
              state:state,
              country:country,
  
            }
  
              fetch("http://localhost:5000/useradded",
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
              //end
            setOpen(false);
            }
      }

  setuserID("");
  setusername("");
  setCity("");
  setState("");
  setCountry("");
  setPassword("");

  };

  const onLoginClick = () => {
    if (loginId === "" || loginpassword === "")
      {
      alert("You cannot leave the field empty!!!!!");
      // sessionStorage.setItem("userID", loginId);
      console.log(sessionStorage.getItem("userID"));
      setloginID("");
      setLoginpassword("");
    }

    else  
     {setTimeout(function() {

        let flag = false;
        for(let i = 0; i < users.length;i++)
        {
          if(users[i].userID === loginId && users[i].password === loginpassword)
          {
            flag = true;
            
          }
        }
        if(flag)
        {
          window.location.assign( "http://localhost:3000/bank-details");
        }

        else
        {
          alert("Either username or password is incorrect");
          setloginID("");
          setLoginpassword("");
        }

        sessionStorage.setItem("userID", loginId);

      }, 1000);}}
     

  



  return (
    <div>
    <Slider images={Images} />
    <div className="login">
      <h1
        className="login-heading"
        style={{ paddingBottom: "2rem", color: "white" }}
      >
        LOGIN
      </h1>
      <div className="login-page">
        <div className="login-container">
          <TextField
            value={loginId}
            onChange={(e) => setloginID(e.target.value)}
            id="outlined-basic"
            label="UserID"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            value={loginpassword}
            onChange={(e) => setLoginpassword(e.target.value)}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <br />
          <br />
          
          <div className="button-cont">
            <button onClick={onLoginClick} className="submit">
              LOGIN
            </button>
          </div>
       

          <div className="login-heading">
            <h4>Not Registered yet?</h4>
          </div>
          <br />
          <div className="button-cont">
            <Button
              style={{
                color: "gray",
                backgroundColor: "#DFD8CA",
                fontWeight: "600",
              }}
              className="submit"
              onClick={handleOpen}
            >
              SignUp
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
              value={username}
                onChange={(e) => setusername(e.target.value)}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Typography>
            <br />
            <Typography
              style={{ display: "flex" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              <TextField
              value={city}
                onChange={(e) => setCity(e.target.value)}
                id="outlined-basic"
                label="City"
                variant="outlined"
              />
              <TextField
              value={state}
                onChange={(e) => setState(e.target.value)}
                id="outlined-basic"
                label="State"
                variant="outlined"
              />
              <TextField
              value={country}
                onChange={(e) => setCountry(e.target.value)}
                id="outlined-basic"
                label="Country"
                variant="outlined"
              />
            </Typography>
            <br />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
              value={userID}
                onChange={(e) => setuserID(e.target.value)}
                id="outlined-basic"
                label="UserID"
                variant="outlined"
                helperText="*UserID should be 10 characters long"
              />
            </Typography>
            <br />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
              value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                helperText="*password should be 8-16 characters long"
              />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <button onClick={onRegisterClick} className="submit">
                Register
              </button>
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
    </div>
  );
}



export default Login;
