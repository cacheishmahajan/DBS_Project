import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import "./Sell.css";

const currencies = [
  {
    value: "USD",
    label: "Home and Decor",
  },
  {
    value: "EUR",
    label: "Furniture",
  },
  {
    value: "BTC",
    label: "Art",
  },
  {
    value: "JPY",
    label: "Collectables",
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
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="sell-container">
    <h1>Update Item Details</h1>
      <div className="sell-form">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Location" variant="outlined" />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Minimum Bid Price"
              variant="outlined"
            />
          </div>
          <TextField
              id="outlined-basic"
              label="Item Description"
              variant="outlined"
              fullWidth
              multiline
            />
          <div>
          <TextField
              id="outlined-basic"
              label="Bid Start Time"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Bid End Time"
              variant="outlined"
            />
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <TextField
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
            <input type="file" accept="image/*" />
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button className="submit">Submit</button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Sell;
