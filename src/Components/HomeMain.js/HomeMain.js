import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function HomeMain() {
  let navigate = useNavigate();
  function AdminLoginBtn() {
    navigate("/Adminlogin");
  }
  function EmpLoginBtn() {
    navigate("/EmployeeLogin");
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
          onClick={AdminLoginBtn}
        >
          Admin Login
        </Button>
        <Button
          variant="contained"
          style={{ margin: "10px", width: "500px", backgroundColor: "#1a4f76" }}
          onClick={EmpLoginBtn}
        >
          Employee Login
        </Button>
      </Grid>
    </>
  );
}
export default HomeMain;
