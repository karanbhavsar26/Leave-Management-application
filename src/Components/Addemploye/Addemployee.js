import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { IconButton } from '@mui/material';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import {
  EmailValidation,
  PasswordValidation,
  QciidValidation,
  NameValidation,NotemptyValidation,NotnullValidation
} from "../Utility/Validation";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Addemployee() {
  let token=localStorage.getItem("Token")

  const [qcid, setQciid] = useState("");
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Board, setBoard] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Balancecasualleave, setBalancecasualleave] = useState("");
  const [Balancesickleave, setBalancesickleave] = useState("");
  const [Balanceprivilegeleave, setBalanceprivilegeleave] = useState("");
  const [Balancematernityleave, setBalancematernityleave] = useState("");
  const [Balancepaternityleave, setBalancepaternityleave] = useState("");
  const [Balanceextraordinaryleave, setBalanceextraordinaryleave] =
    useState("");
  const [Employeetype, setonchangetypeofemp] = useState("");
  const [Gender, setonchangeradiogender] = useState("male");

  const navigate = useNavigate();
  function onchangeofQcid(e) {
    setQciid(e.target.value);
  }
  function onchangeofEmail(e) {
    setEmail(e.target.value);
  }
  function onchangeofName(e) {
    setName(e.target.value);
  }
  function onchangeofPassword(e) {
    setPassword(e.target.value);
  }
  function onchangeofBoard(e) {
    setBoard(e.target.value);
  }
  function onchangeofDesig(e) {
    setDesignation(e.target.value);
  }
  function onchangeofBcl(e) {
    setBalancecasualleave(e.target.value);
  }
  function onchangeofBsl(e) {
    setBalancesickleave(e.target.value);
  }
  function onchangeofBpri(e) {
    setBalanceprivilegeleave(e.target.value);
  }
  function onchangeofBml(e) {
    setBalancematernityleave(e.target.value);
  }
  function onchangeofBpl(e) {
    setBalancepaternityleave(e.target.value);
  }
  function onchangeofBeol(e) {
    setBalanceextraordinaryleave(e.target.value);
  }
  function onchangetypeofemp(e) {
    setonchangetypeofemp(e.target.value);
  }
  function onchangeradiogender(e) {
    setonchangeradiogender(e.target.value);
  }
  function cancelbtn() {
    setonchangeradiogender("male");
    setonchangetypeofemp("");
    setBalanceextraordinaryleave("");
    setBalancepaternityleave("");
    setBalancematernityleave("");
    setBalanceprivilegeleave("");
    setBalancesickleave("");
    setBalancecasualleave("");
    setDesignation("");
    setBoard("");
    setPassword("");
    setName("");
    setQciid("");
    setEmail("");
  }

  function AddNew() {
    if (QciidValidation(qcid) == false) {
      alert("Please input Qci Id");
    } 
    if(NameValidation(Name)==false){
      alert("Please input Valid Name");

    }
    if( EmailValidation(email)==false){
      alert("Please Enter Valid Email Id")
    }
    if(NameValidation(Board)==false){
      alert("Please input Valid Board ");

    }
    if(NameValidation(Designation)==false){
      alert("Please input Valid Designation");

    }
    if(NotemptyValidation(Gender)==false){
      alert("Please input Valid gender");

    }
    else if(NotemptyValidation(Employeetype)==false){
      alert("Please input Valid Employeetype");

    }
    if((NotemptyValidation(Balancecasualleave)&&NotemptyValidation(Balancesickleave)&&NotemptyValidation(Balanceprivilegeleave)&&NotemptyValidation(Balancematernityleave)&&NotemptyValidation(Balancematernityleave)&&NotemptyValidation(Balancepaternityleave)&&NotemptyValidation(Balanceextraordinaryleave))==false){
      alert("Please input Leave");

    }
    
    if(PasswordValidation(password)==false){
      alert("Please input Valid password");

    }
   
    else {
      fetch("http://127.0.0.1:5000/lms/addEmployee", {
        method: "POST",
        headers:{
          "Authorization":token
        },
        body: JSON.stringify({
          qci_id: qcid,
          name: Name,
          email: email,
          board: Board,
          designation: Designation,
          type_of_employee: Employeetype,
          gender: Gender,
          bal_cl: Balancecasualleave,
          bal_sl: Balancesickleave,
          bal_pl: Balanceprivilegeleave,
          bal_ml: Balancematernityleave,
          bal_ptl: Balancepaternityleave,
          bal_eol: Balanceextraordinaryleave,
          password: password,
        }),
      })
        .then((Data) => Data.json())
        .then((data) => {
          console.log(data)
          if (data.success) {
            navigate("/EmployeeDetail");
          } else {
            alert(data.message);
          }
        });
    }
  }
  return (
    <>
      <Grid
        container
        style={{ backgroundColor: "#e2e2e2" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        margin="0"
        
        
      >
        <Typography marginBottom={"50px"} variant="h3">Add Employee</Typography>

        <TextField
          style={{ margin: "10px", width: "500px" }}
          label="QCI ID"
          variant="outlined"
          onChange={onchangeofQcid}
          value={qcid}
          max={1}
          type="number"
          required
        />
        <TextField
          style={{ margin: "10px", width: "500px" }}
          label="Name"
          variant="outlined"
          onChange={onchangeofName}
          value={Name}
          required
        />
        <TextField
          id="Email"
          type="email"
          style={{ margin: "10px", width: "500px" }}
          label="Email ID"
          variant="outlined"
          onChange={onchangeofEmail}
          value={email}
          required
        />

        <TextField
          style={{ margin: "10px", width: "500px" }}
          label="Board"
          variant="outlined"
          onChange={onchangeofBoard}
          value={Board}
          required
        />
        <TextField
          style={{ margin: "10px", width: "500px" }}
          label="Designation"
          variant="outlined"
          onChange={onchangeofDesig}
          value={Designation}
          required
        />
        <FormControl style={{ margin: "10px", width: "500px" }}>
          <InputLabel id="demo-simple-select-label">
            Type of Employee
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Employeetype}
            label="Type of Employee"
            onChange={onchangetypeofemp}
          >
            <MenuItem value={"regular"}>Regular</MenuItem>
            <MenuItem value={"professional"}>Professional</MenuItem>
            <MenuItem value={"contract"}>Contract</MenuItem>
          </Select>
        </FormControl>

        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={Gender}
          onChange={onchangeradiogender}
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <TextField
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="Balance casual leave"
          variant="outlined"
          onChange={onchangeofBcl}
          value={Balancecasualleave}
          required
        />
        <TextField
          id=""
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="Balance sick leave"
          variant="outlined"
          onChange={onchangeofBsl}
          value={Balancesickleave}
          required
        />
        <TextField
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="Balance privilege leave"
          variant="outlined"
          onChange={onchangeofBpri}
          value={Balanceprivilegeleave}
        />
        <TextField
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="Balance maternity leave"
          variant="outlined"
          onChange={onchangeofBml}
          value={Balancematernityleave}
        />
        <TextField
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="Balance paternity leave"
          variant="outlined"
          onChange={onchangeofBpl}
          value={Balancepaternityleave}
        />
        <TextField
          type="number"
          style={{ margin: "10px", width: "500px" }}
          label="Balance extra ordinary leave"
          variant="outlined"
          onChange={onchangeofBeol}
          value={Balanceextraordinaryleave}
        />

        <TextField
          label="Password"
          type="password"
          style={{ margin: "10px", width: "500px" }}
          variant="outlined"
          onChange={onchangeofPassword}
          value={password}
        />
        <div>
          <Button
            variant="contained"
            style={{
              margin: "10px",
              width: "225px",
              backgroundColor: "#2e5894",
            }}
            onClick={AddNew}
          >
            Add New
          </Button>
          <Button
            variant="contained"
            style={{
              margin: "10px",
              width: "225px",
              backgroundColor: "#2e5894",
            }}
            onClick={cancelbtn}
          >
            Cancel
          </Button>
        </div>
      </Grid>
    </>
  );
}
export default Addemployee;
