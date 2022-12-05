import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { EmailValidation, PasswordValidation,
  QciidValidation,
  NameValidation,NotemptyValidation } from "../Components/Utility/Validation";

function Editdetail() {
  let data = useLocation();
  let {
    bal_cl,
    bal_eol,
    bal_ml,
    bal_pl,
    bal_ptl,
    bal_sl,
    board,
    designation,
    email,
    gender,
    name,
    qci_id,
    type_of_employee,
  } = data.state;
  const [qcid, setQciid] = useState(qci_id);
  const [emailid, setEmail] = useState(email);
  const [Name, setName] = useState(name);
  const [password, setPassword] = useState("");
  const [Board, setBoard] = useState(board);
  const [Designation, setDesignation] = useState(designation);
  const [Balancecasualleave, setBalancecasualleave] = useState(bal_cl);
  const [Balancesickleave, setBalancesickleave] = useState(bal_sl);
  const [Balanceprivilegeleave, setBalanceprivilegeleave] = useState(bal_pl);
  const [Balancematernityleave, setBalancematernityleave] = useState(bal_ml);
  const [Balancepaternityleave, setBalancepaternityleave] = useState(bal_ptl);
  const [Balanceextraordinaryleave, setBalanceextraordinaryleave] =
    useState(bal_eol);
  const [Employeetype, setonchangetypeofemp] = useState(type_of_employee);
  const [Gender, setonchangeradiogender] = useState(gender);
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
  function updatebtn() {
    if (QciidValidation(qcid) == false) {
      alert("Please input Qci Id");
    } else if (NameValidation(Name) == false) {
      alert("Please input Valid Name");
    } else if (EmailValidation(emailid) == false) {
      alert("Please Enter Valid Email Id");
    } else if (NameValidation(Board) == false) {
      alert("Please input Valid Board ");
    } else if (NameValidation(Designation) == false) {
      alert("Please input Valid Designation");
    } else if (NotemptyValidation(Gender) == false) {
      alert("Please input Valid gender");
    } else if (NotemptyValidation(Employeetype) == false) {
      alert("Please input Valid Employeetype");
    } else if (PasswordValidation(password) == false) {
      alert("Please input Valid password");
    } else if (
      NotemptyValidation(Balancecasualleave) &&
      NotemptyValidation(Balancesickleave) &&
      NotemptyValidation(Balanceprivilegeleave) &&
      NotemptyValidation(Balancematernityleave) &&
      NotemptyValidation(Balancematernityleave) &&
      NotemptyValidation(Balancepaternityleave) &&
      NotemptyValidation(Balanceextraordinaryleave) == false
    ) {
      alert("Please input Valid gender");
    } else {
      fetch("http://127.0.0.1:5000/lms/editEmployeeDetails", {
        method: "POST",
        body: JSON.stringify({
          qci_id: qcid,
          name: Name,
          email: emailid,
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
        .then((data) => data.json())
        .then((Data) => {
          console.log(Data);
          if (Data.success) {
            alert("updated successfuly");
            navigate("/EmployeeDetail");
          } else {
            alert(Data.success);
          }
        });
    }
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
  return (
    <>
      <Grid
        container
        style={{ backgroundColor: "#Add8e6" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        margin="0"
        padding="0"
      >
        <Typography variant="h4">Update Employee</Typography>

        <>
          <TextField
            value={qcid}
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
            onChange={onchangeofQcid}
            disabled
          ></TextField>

          <TextField
            onChange={onchangeofName}
            value={Name}
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofEmail}
            value={emailid}
            type="email"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofDesig}
            value={Designation}
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofBoard}
            value={Board}
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <Select
            value={Employeetype}
            onChange={onchangetypeofemp}
            style={{ margin: "10px", width: "500px" }}
          >
            <MenuItem value={"regular"}>Regular</MenuItem>
            <MenuItem value={"professional"}>Professional</MenuItem>
            <MenuItem value={"contract"}>Contract</MenuItem>
          </Select>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={Gender}
            onChange={onchangeradiogender}
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <TextField
            onChange={onchangeofBcl}
            value={Balancecasualleave}
            type="number"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofBeol}
            value={Balanceextraordinaryleave}
            type="number"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofBml}
            value={Balancematernityleave}
            type="number"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofBpl}
            value={Balancepaternityleave}
            type="number"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofBpri}
            value={Balanceprivilegeleave}
            type="number"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

          <TextField
            onChange={onchangeofBsl}
            value={Balancesickleave}
            type="number"
            variant="outlined"
            style={{ margin: "10px", width: "500px" }}
          ></TextField>

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
              onClick={updatebtn}
            >
              Update
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
        </>
      </Grid>
    </>
  );
}
export default Editdetail;
