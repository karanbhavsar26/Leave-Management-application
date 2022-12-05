import { useState } from "react";
import { json } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Datecomp from "./Datecomp";
import {
  EmailValidation,
  PasswordValidation,
  QciidValidation,
  NotnullValidation,
  NotemptyValidation,
} from "../Utility/Validation";
import LeaveDetail from "../LeaveDetail/LeaveDetail";

function Applyleave() {
  let token = localStorage.getItem("Token");
  let qciid = localStorage.getItem("Qci_id");
  const [date_of_apply, setDateofapply] = useState("");

  const [leave_type, setleavetype] = useState("");
  const [date_from, setdatefrom] = useState("");
  const [date_to, setdateto] = useState("");
  const [days, setdays] = useState("");
  const [leave_reason, setleavereason] = useState("");
  const [attachment, setattachment] = useState("");
  const navigate = useNavigate();

  function handleForDateofapply(e) {
    let temp = e.target.value;
    temp = temp.split("-").reverse().join("/");
    setDateofapply(temp);
    console.log(temp,typeof(temp))
  }
  function handleForDateofTo(e) {
    let temp = e.target.value;
    temp = temp.split("-").reverse().join("/");
    setdateto(temp);
  }
  function handleForDateofFrom(e) {
    let temp = e.target.value;
    temp = temp.split("-").reverse().join("/");
    setdatefrom(temp);
  }

  function handleforleavetype(e) {
    setleavetype(e.target.value);
  }
  function handlefordays(e) {
    setdays(e.target.value);
  }
  function handleforleavereason(e) {
    setleavereason(e.target.value);
  }
  function Applybtn() {
    if (
      (NotnullValidation(date_of_apply) &&
        NotnullValidation(date_from) &&
        NotnullValidation(date_to)) == false
    ) {
      alert("Please Enter Vaild Date");
    } else if (NotemptyValidation(leave_type) == false) {
      alert("Please Select Leave Type");
    } else if (NotemptyValidation(days) == false) {
      alert("Please Enter Number Days of leave");
    } else if (NotemptyValidation(leave_reason) == false) {
      alert("Please Write Reason of Leave");
    } else {
      fetch("http://127.0.0.1:5000/lms/applyLeave", {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({
          date_of_apply:
            date_of_apply,
          qci_id: qciid,
          leave_type: leave_type,
          date_from: date_from,
          date_to: date_to,
          days: days,
          leave_reason: leave_reason,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            alert(data.message);
            navigate("/LeaveDetail");
          } else {
            alert(data.success);
          }
        });
    }
  }
  function Cancelb() {
    setDateofapply("");
    setattachment("");
    setdatefrom("");
    setdateto("");
    setdays("");
    setleavereason("");
    setleavetype("");
  }

  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e2e2e2",
        alignItems: "center",
        justifyContent: "start",
        height: "92%",
        width: "100%",
        margin: "0",
        padding: "0",
      }}
    >
      <Typography variant="h4" style={{ margin: "30px 0" }}>
        Application for Leave
      </Typography>

      <Datecomp onDatechange={handleForDateofapply} />

      <FormControl style={{ marginTop: "20px" }}>
        <InputLabel id="demo-simple-select-label">Type of Leave</InputLabel>
        <Select
          id="demo-simple-select-label"
          value={leave_type}
          label="Type of Leave"
          onChange={handleforleavetype}
          style={{
            width: "300px",
          }}
        >
          <MenuItem value={"casual"}>casual</MenuItem>
          <MenuItem value={"sick"}>sick</MenuItem>
          <MenuItem value={"privilege"}>privilege</MenuItem>
          <MenuItem value={"maternity"}>maternity</MenuItem>
        </Select>
      </FormControl>

      <Datecomp onDatechange={handleForDateofTo} />
      <Datecomp onDatechange={handleForDateofFrom} />


     

      <TextField
        type="number"
        value={days}
        onChange={handlefordays}
        label="Number of Leaves"
        style={{
          width: "300px",
          marginTop: "20px",
        }}
      />

      <TextField
        type=""
        value={leave_reason}
        onChange={handleforleavereason}
        label="Leave Reason"
        style={{
          width: "300px",
          marginTop: "20px",
        }}
        multiline
        rows={4}
      />

      <Grid>
        <Button
          onClick={Applybtn}
          variant="contained"
          style={{ margin: "10px" }}
        >
          Apply
        </Button>
        <Button onClick={Cancelb} variant="contained">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
}
export default Applyleave;
