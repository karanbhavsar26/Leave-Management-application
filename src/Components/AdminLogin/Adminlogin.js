import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Addemployee from "../Addemploye/Addemployee";
import { EmailValidation,PasswordValidation } from "../Utility/Validation";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onchangeofEmail(e) {
    setEmail(e.target.value);
  }
  function onchangeofPassword(e) {
    setPassword(e.target.value);
  }
  function Signin() {
    if ((EmailValidation(email)&&PasswordValidation(password)) == true) {
      fetch("http://127.0.0.1:5000/lms/loginAdmin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("Token",data.token)
          localStorage.setItem("isAdmin",true)

            navigate("/Addemployee");
          } else {
            alert(data.message);
          }
        });
    } else {
      alert("Error");
    }
  }
  return (
    <>
      <Grid
        container
        style={{ backgroundColor: "#Add8e6" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        margin="0"
        padding="0"
      >
        <Typography variant="h4">Admin Login</Typography>

        <TextField
          id="Email"
          type="email"
          style={{ margin: "10px", width: "500px" }}
          label="Email"
          variant="outlined"
          onChange={onchangeofEmail}
          value={email}
        />

        <TextField
          label="Password"
          type="password"
          style={{ margin: "10px", width: "500px" }}
          variant="outlined"
          onChange={onchangeofPassword}
          value={password}
        />
        <Button
          variant="contained"
          style={{ margin: "10px", width: "500px", backgroundColor: "#2e5894" }}
          onClick={Signin}
        >
          Sign In
        </Button>
      </Grid>
    </>
  );
}
export default Adminlogin;
