import "./Login.css";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="login">
      <h1 className="login-heading" style={{ paddingBottom: "2rem",color:"white" }}>
        LOGIN
      </h1>
      <div className="login-page">
        <div className="login-container">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <br />
          <br />
          <div className="button-cont">
            <button className="submit">LOGIN</button>
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
              <TextField id="outlined-basic" label="Name" variant="outlined" />
            </Typography>
            <br />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Typography>
            <br />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Typography>
            <br />
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <button className="submit">Register</button>
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
