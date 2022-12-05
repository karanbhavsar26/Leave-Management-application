import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Adminlogin from "./Components/AdminLogin/Adminlogin";
import Addemployee from "./Components/Addemploye/Addemployee";
import Notfound from "./Notfound/notfound";
import EmployeeDetail from "./Components/EmployeeDetails/EmployeeDetail";
import Editdetail from "./Editdetail/Editdetail";
import Applyleave from "./Components/Applyleave/Applyleave";
import LeaveDetail from "./Components/LeaveDetail/LeaveDetail";
import HomeMain from "./Components/HomeMain.js/HomeMain";
import EmployeeLogin from "./Components/EmployeeLogin/EmployeeLogin";
import Application from "./Components/Application/Application";
import LayoutforAdmin from "./Components/Layout/LayoutforAdmin";
import LayoutforEmp from "./Components/Layout/LayoutforEmp";
import EditLeave from "./Components/EditLeave/EditLeave";
import Securedbasedrouting from "./Securedrouting";
import Unauthorized from "./Unauthorized";
import EmpDetail from "./Components/EmployeeDetails/EmpDetails";
import TotalEmp from "./Components/TotalEmp";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Securedbasedrouting role="Admin"/>}>
            <Route path="/Addemployee" element={<Addemployee />}></Route>
            <Route path="/Application" element={<Application />}></Route>
            <Route path="/Editdetail" element={<Editdetail />}></Route>
            <Route path="/EmployeeDetail" element={<EmployeeDetail />}></Route>
<Route path="/TotalEmp" element={<TotalEmp/>}></Route>

          </Route>
          <Route element={<Securedbasedrouting role="Employee"/>} >
            <Route path="/Applyleave" element={<Applyleave />}></Route>
            <Route path="/LeaveDetail" element={<LeaveDetail />}></Route>
            <Route path="/EditLeave" element={<EditLeave />} ></Route>
          </Route>
          <Route path="/" element={<Adminlogin />}></Route>
          <Route path="/EmployeeLogin" element={<EmployeeLogin />}></Route>

          <Route path="/Adminlogin" element={<Adminlogin />}></Route>
          <Route path="/*" element={<Notfound />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Unauthorized" element={<Unauthorized/>}></Route>
            <Route path="/EmpDetail" element={<EmpDetail />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Routing;
