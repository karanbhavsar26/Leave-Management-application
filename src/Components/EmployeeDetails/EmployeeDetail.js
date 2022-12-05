import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Home from "../Home/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function EmployeeDetail() {
  let [Data, setData] = useState(null);
  const navigate = useNavigate();
  const [Data1, setData1] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/totalEmployees")
      .then((data) => data.json())
      .then((data) => setData1(data));
  }, []);
  function Editempdetail(Empdetail) {
    navigate("/Editdetail", { state: Empdetail });
  }
  function getEmpDetails() {
    let token = localStorage.getItem("Token");
    console.log(token, typeof token);
    fetch("http://127.0.0.1:5000/lms/employeeDetails", {
      headers: {
        Authorization: token,
      },
    })
      .then((data) => data.json())
      .then((Data) => {
        setData(Data);
      });
  }
  function Deleteempdetail(Qciid) {
    let token = localStorage.getItem("Token");

    fetch("http://127.0.0.1:5000/lms/deleteEmployee", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        qci_id: Qciid.qci_id,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          getEmpDetails();
        } else {
          alert(data.message);
        }
      });
  }

  function Addemployeepage() {
    navigate("/Addemployee");
  }
  useEffect(() => {
    getEmpDetails();
  }, []);

  function Homepage() {
    navigate("/Home");
  }

  if (Data == null) {
    <h1>Loading...</h1>;
  } else {
    return (
      <Grid
        container
        style={{ backgroundColor: "#e2e2e2", width: "100%" }}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        padding={" 0 40px"}
        marginLeft="25px"
      >
        <Typography variant="h4" style={{marginBottom:"10px"}}>Employee List</Typography>
        <Typography style={{ textAlign: "center",marginBottom:"40px" }}>
          {"Total No. of employees" + " " + Data1.count}
        </Typography>

        <TableContainer
          component={Paper}
          style={{ backgroundColor: "#ffffff", padding: "10px" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Qci id</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Board</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Designation
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Type of employee
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Gender</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Bal_cl</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Bal_sl</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Bal_pl</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Bal_ml</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Bal_ptl</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Bal_eol</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Edit</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.data.map((emp) => (
                <TableRow>
                  <TableCell>{emp.qci_id}</TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.board}</TableCell>
                  <TableCell>{emp.designation}</TableCell>
                  <TableCell>{emp.type_of_employee}</TableCell>
                  <TableCell>{emp.gender}</TableCell>
                  <TableCell>{emp.bal_cl}</TableCell>
                  <TableCell>{emp.bal_sl}</TableCell>
                  <TableCell>{emp.bal_pl}</TableCell>
                  <TableCell>{emp.bal_ml}</TableCell>
                  <TableCell>{emp.bal_ptl}</TableCell>
                  <TableCell>{emp.bal_eol}</TableCell>
                  <TableCell>
                    {
                      <IconButton
                        variant="contained"
                        onClick={() => Editempdetail(emp)}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                  </TableCell>
                  <TableCell>
                    {
                      <IconButton
                        variant="contained"
                        onClick={() => Deleteempdetail(emp)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid>
          <Button
            onClick={Addemployeepage}
            style={{ marginTop: "10px" }}
            variant="contained"
          >
            Add Employee
          </Button>
          <Button
            onClick={Homepage}
            style={{ marginTop: "10px", backgroundColor: "green" }}
            variant="contained"
          >
            Home Page
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default EmployeeDetail;
