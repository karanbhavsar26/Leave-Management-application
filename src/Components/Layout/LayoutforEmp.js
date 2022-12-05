import {
    AppBar,
    Grid,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    ListItemIcon,
    Button,
  } from "@mui/material";
  
  import Divider from '@mui/material/Divider';
  import { Box } from "@mui/system";
  import { Outlet } from "react-router-dom";
  import Link from "@mui/material/Link";
  import { useNavigate } from "react-router-dom";
  function LayoutforEmp() {

    let navigate=useNavigate()
    function Logout(){
      localStorage.removeItem("Token")
      localStorage.removeItem("Qci_id")
      localStorage.removeItem("isEmp")
      localStorage.removeItem("application_id")


  navigate("/EmployeeLogin")
    }
    return (
      <Grid style={{ height:"100%" }}>
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography>Leave Management System</Typography>
            <Button color="inherit" onClick={Logout} style={{marginLeft:"82%"}}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Toolbar />
          <List>
            <ListItem style={{padding:"10px 50px 20px 20px"}}>
              <Link href="/Applyleave" underline="none" color="black">
                <Typography variant="p" > Apply Leave</Typography>
              </Link>
            </ListItem>
            <Divider />
            <ListItem style={{padding:"10px 50px 20px 20px"}}>
              <Link href="/LeaveDetail" underline="none" color="black">
                <Typography variant="p" > Manage Leave</Typography>
              </Link>
            </ListItem>
            <Divider />
            
           
          </List>
        </Drawer>
        <Grid style={{ marginLeft: "10%",height:"100%" }}>
          <Toolbar />
  
          <Outlet />
        </Grid>
      </Grid>
    );
  }
  export default LayoutforEmp;