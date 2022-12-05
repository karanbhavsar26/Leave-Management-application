//Manage Leave

import { useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
function LeaveDetail() {
  const [data2, setdata2] = useState("");
  // let data = useLocation();
  // let Qciid = data.state;
  let token = localStorage.getItem("Token");
  let Qciid = localStorage.getItem("Qci_id");
  let navigate = useNavigate();
  
  function EditLeavebtn(application_id,data){
localStorage.setItem("application_id",application_id)

    navigate("/EditLeave",{state:{Ndata:data}})
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/applyLeave/" + Qciid, {
      headers: {
        Authorization: token,
      },
    })
      .then((data) => data.json())
      .then((data) => setdata2(data));
    console.log(data2);
    console.log(typeof Qciid);
  }, []);
  if (data2 == "") {
    <Typography>loading</Typography>;
  } else {
    return (
      <Grid style={{ backgroundColor: "#e2e2e2", height: "100%" }}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          Manage Leave
        </Typography>
        <Grid
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingLeft: "20px",
            justifyContent: "center",
          }}
          container
        >
          {data2.data.map((data) => (
            <Card
              sx={{ minWidth: 275 }}
              style={{ width: "300px", margin: "10px" }}
            >
              <CardContent>
               
                <Typography>Date of Apply : {data.date_of_apply}</Typography>
                <Typography>From : {data.date_from}</Typography>
                <Typography>To : {data.date_to}</Typography>
                <Typography>Days : {data.days}</Typography>
                <Typography>Leave Reason : {data.leave_reason}</Typography>
                <Typography>Leave Status : {data.leave_status}</Typography>
                <Typography>Leave Type : {data.leave_type}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>(EditLeavebtn(data.application_id,data))}>
                  Edit Leave
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    );
  }
}
export default LeaveDetail;
