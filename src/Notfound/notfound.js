import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  function Tohomepage(){
    navigate("/Home")
  }
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#Add8e6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{
        textAlign:"center"
      }}>
        <h1 style={{ fontSize: "100px" }}>404</h1>
        <h1> Page Not Found</h1>
        <button style={{ fontSize: "30px",padding:"10px",margin:"10px",borderRadius:"50px"}} onClick={Tohomepage}>HomePage</button>
      </div>
    </div>
  );
}
export default Notfound;
