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
import Home from "../Home/Home";
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
function LayoutforAdmin() {
  let DrawerMenu = ["Add New Employee", "Manage Leave", "Employee List"];
  let navigate=useNavigate()
  function goToLogin(){
navigate("/")
  }
  return (
    <Grid >
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography>Leave Application</Typography>
          <Button color="inherit" onClick={goToLogin} style={{marginLeft:"85%"}}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" >
        <Toolbar />
        <List >
          <ListItem style={{padding:"10px 50px 20px 20px"}}>
            <Link href="/Addemployee" underline="none" color="black">
              <Typography variant="p" > Add New Employee</Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem style={{padding:"10px 50px 20px 20px"}}>
            <Link href="/Application" underline="none" color="black">
              <Typography variant="p"> Manage Leave</Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem style={{padding:"10px 50px 20px 20px"}}>
            <Link href="/EmployeeDetail" underline="none" color="black">
              <Typography variant="p"> Employee List</Typography>
            </Link>
          </ListItem>
          <Divider />
         
        </List>
      </Drawer>
      <Grid style={{ marginLeft: "12%" }}>
        <Toolbar />
        <Outlet />
      </Grid>
    </Grid>
  );
}
export default LayoutforAdmin;
