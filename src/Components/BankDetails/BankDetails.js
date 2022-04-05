import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./BankDetails.css";

const BankDetails = () => {
  return (
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
              id="outlined-basic"
              label="Account Holder"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Account Number"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Bank Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Bank Branch"
              variant="outlined"
            />
          </div>
        </Box>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
