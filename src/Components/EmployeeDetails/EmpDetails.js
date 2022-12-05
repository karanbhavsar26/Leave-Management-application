import { useEffect, useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import Grid from "@mui/material/Grid";

import { AgGridReact } from "ag-grid-react";

function EmpDetail() {
  const [Data, setData] = useState();

  const [rowData, setrowData] = useState(null);

  const [columnDefs, setcloumnDefs] = useState([
    { field: "qci_id" },
    { field: "name" },
    { field: "board" },
    { field: "designation" },
    { field: "type_of_employee" },
    { field: "gender" },
    { field: "bal_cl" },
    { field: "bal_sl" },
    { field: "bal_pl" },
    { field: "bal_ml" },
    { field: "bal_ptl" },
    { field: "bal_eol" },
    { field: "Edit" },
    { field: "Delete" },
  ]);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  useEffect(() => {
    fetch("http://127.0.0.1:5000/lms/employeeDetails", {})
      .then((data) => data.json())
      .then((Data) => {
        
        setrowData(Data.data);
        console.log(Data.data)
      });
  }, []);

  // let addEditdelete = (rwData) => {
  //   if(rwData!=""){
  //   rwData= rwData.map((emp) => (emp.Delete = "delete"));
  //   console.log(rwData);
  //   setrowData(rwData);}
  // };

  // useEffect(() => {
  //   return addEditdelete(rowData);
  // }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        animateRows={true}
        rowSelection={"multiple"}
        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef}
        // Default Column Properties
      ></AgGridReact>
    </div>
  );
}

export default EmpDetail;
