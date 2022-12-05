import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";
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
import Datecomp from "../Applyleave/Datecomp";

import {
  EmailValidation,
  PasswordValidation,
  QciidValidation,
  NotnullValidation,
  NotemptyValidation,
} from "../Utility/Validation";

function EditLeave() {
  let sdata = useLocation();
  let previous_leave_days=sdata.state.Ndata.days;
  let previous_leave_type=sdata.state.Ndata.leave_type;
  let previous_start_date=sdata.state.Ndata.date_from;
  let previous_end_date=sdata.state.Ndata.date_to;
  let application_id = localStorage.getItem("application_id");
  let Qci_id = localStorage.getItem("Qci_id");
  
  const [date_of_apply, setDateofapply] = useState(new Date());
  const [leave_type, setleavetype] = useState(sdata.state.Ndata.leave_type);
  const [Data, setData] = useState("");
  const [date_from, setdatefrom] = useState(sdata.state.Ndata.date_from);
  const [date_to, setdateto] = useState(sdata.state.Ndata.date_to);
  const [days, setdays] = useState(sdata.state.Ndata.days);
  const [leave_reason, setleavereason] = useState(sdata.state.Ndata.leave_reason);
  console.log(sdata)
  const navigate = useNavigate();

  
  function handleForDateofapply(e) {
    let temp = e.target.value;
    temp = temp.split("-").reverse().join("/");
    setDateofapply(temp);
    
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
  function Savebtn(){
    fetch("http://127.0.0.1:5000/lms/applyLeave")
    navigate("/LeaveDetail")
  }
  function Cancelb() {
    setDateofapply(null);
    setdatefrom(null);
    setdateto(null);
    setdays("");
    setleavereason("");
    setleavetype("");
    
  }
  return (
    <>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e2e2e2",
          alignItems: "center",
          justifyContent: "start",
          height: "92%",
          
          margin: "0",
          padding: "0",
        }}
      >
        <Typography variant="h5" marginTop={"50px"}>Edit Leave</Typography>
        
        <Datecomp onDatechange={handleForDateofapply} val={date_of_apply} />

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
        <Grid style={{padding:"20px"}}>
        <Button style={{padding:" 0 20px"}} onClick={Savebtn}>Save</Button>
        <Button style={{padding:"0 20px"}} onClick={Cancelb}>Cancel</Button>
        </Grid>
      </Grid>
    </>
  );
}
export default EditLeave;
