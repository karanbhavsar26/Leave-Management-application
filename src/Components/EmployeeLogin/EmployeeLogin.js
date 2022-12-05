import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {
  let [Qciid, setQciid] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  function onchangeofQciid(e) {
    setQciid(e.target.value);
  }
  function onchangeofPassword(e) {
    setPassword(e.target.value);
  }
  function Signin() {
    fetch("http://127.0.0.1:5000/lms/loginEmp", {
      method: "POST",
      body: JSON.stringify({
        qci_id: Qciid,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("Token",data.token)
          localStorage.setItem("Qci_id",Qciid)
          localStorage.setItem("isAdmin",false)
          navigate("/Applyleave");
        } else {
          alert(data.message);
        }
      });
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
        <Typography
          variant="h4"
          style={{ textAlign: "center", paddingTop: "20px" }}
        >
          Employee Login
        </Typography>

        <TextField
          id="QCI ID"
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="QCI ID"
          variant="outlined"
          onChange={onchangeofQciid}
          value={Qciid}
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
          style={{
            margin: "10px",
            width: "500px",
            backgroundColor: "#2e5894",
          }}
          onClick={Signin}
        >
          Sign In
        </Button>
      </Grid>
    </>
  );
}
export default EmployeeLogin;
