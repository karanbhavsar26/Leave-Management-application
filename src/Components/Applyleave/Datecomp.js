export default function Datecomp({onDatechange,val}){
console.log(val)
  

    return (
        <>
        <input
        type={"date"}
      value={val}

        style={{
          width: "280px",
          height: "35px",
          backgroundColor: "#e2e2e2",
          border: "1px solid gray ",
          borderRadius: "5px",
          padding: "10px",
          marginTop:"20px"
        }}
        onChange={onDatechange}
      />
        </>
    )
}