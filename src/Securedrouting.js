import LayoutforAdmin from "./Components/Layout/LayoutforAdmin";
import LayoutforEmp from "./Components/Layout/LayoutforEmp";
import { Outlet } from "react-router-dom";
import Notfound from "./Notfound/notfound";
import Unauthorized from "./Unauthorized";

function Securedbasedrouting(prop) {
  let isAdmin = localStorage.getItem("isAdmin");
  let role = prop.role;
  if (isAdmin=="true" && role == "Admin") {
    return (
      <LayoutforAdmin>
        <Outlet />
      </LayoutforAdmin>
    );
  }
  if(isAdmin=="false" && role == "Employee"){
    return (
        <LayoutforEmp>
          <Outlet />
        </LayoutforEmp>
      );
  }
   else  {
    return (
      <Unauthorized/>
    );
  } 
}
export default Securedbasedrouting;
