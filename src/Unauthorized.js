import { Typography,Grid } from "@mui/material";


function Unauthorized(){
    return(<Grid style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <Typography variant="h3">401</Typography>
    <Typography variant="h3">Unauthorized</Typography>
    <Typography variant="p">Your Authorization is failed</Typography>
    <Typography variant="p">Please fill correct data and Try again </Typography>


    </Grid>)
}
export default Unauthorized