import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  function addnewempl() {
    navigate("/Addemployee");
  }
  function ToLeavePage() {
    navigate("/Application");
  }
  return (
    <>
      <Grid
        container
        style={{ backgroundColor: "#ffffff" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        margin="0"
        padding="0"
      >
        <Typography variant="h4">Welcome !</Typography>

        <Button
          variant="contained"
          style={{ margin: "10px", width: "500px", backgroundColor: "#1a4f76" }}
  
        >
          Admin Login
        </Button>
        <Button
          variant="contained"
          style={{ margin: "10px", width: "500px", backgroundColor: "#1a4f76" }}
         
        >
          Employee Login
        </Button>
      </Grid>
    </>
  );
}
export default Home;
