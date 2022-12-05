import { useEffect, useState } from "react";

function TotalEmp() {
  const [Data, setData] = useState("");
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/lms/totalEmployees")
      .then((data) => data.json())
      .then((data) => setData(data))
   }, []
  );
  return <>
  <h1 style={{textAlign:"center"}}>{"Total No. of employees"+" "+Data.count}</h1>
  
  </>;
}
export default TotalEmp;
