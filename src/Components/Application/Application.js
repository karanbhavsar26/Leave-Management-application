import { CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

function Application() {
  let [Data, setData] = useState("");
  let token = localStorage.getItem("Token");
  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/application", {
      headers: {
        Authorization: token,
      },
    })
      .then((data) => data.json())
      .then((Data) => setData(Data));
  }, []);
  function Approvebtn(application_id) {
    alert(application_id)
    // fetch("http://127.0.0.1:5000/lms/approveLeave").then(data=>data.json()).then(Data=>)
  }

  if (Data == "") {
    <Typography>Loading...</Typography>;
  } else {
    return (
      <>
        <Grid style={{ backgroundColor: "#e2e2e2" }}>
          <Typography style={{ textAlign: "center" }} variant="h3">
            Application List
          </Typography>
          <Grid
            container
            style={{
              display: "flex",
              backgroundColor: "#e2e2e2",
              padding: "50px",
              justifyContent: "center",
            }}
          >
            {Data.data.map((emp) => (
              <Card
                style={{
                  width: "300px",
                  margin: "10px",
                  backgroundColor: "#EEF1F0",
                  padding: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Qci Id : {emp.qci_id}
                  </Typography>
                  <Typography>Name : {emp.info[0].name}</Typography>
                  <Typography>Email Id : {emp.info[0].email}</Typography>
                  <Typography>
                    Designation : {emp.info[0].designation}
                  </Typography>
                  <Typography>Board : {emp.info[0].board}</Typography>
                  <Typography>Date of Apply : {emp.date_of_apply}</Typography>
                  <Typography>Days : {emp.days}</Typography>
                  <Typography>To : {emp.date_to}</Typography>
                  <Typography>From : {emp.date_from}</Typography>
                  <Typography>Leave Type : {emp.leave_type}</Typography>
                  <Typography>Leave Reason : {emp.leave_reason}</Typography>
                  <Typography>Leave Status : {emp.leave_status}</Typography>
                  
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    onClick={()=>{Approvebtn(emp.application_id)}}
                  >
                    Approve
                  </Button>
                  <Button size="small" variant="outlined" color="error">
                    Decline
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}
export default Application;
