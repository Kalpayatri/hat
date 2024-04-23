import React from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";

const HomePage=()=>{
    return(
        <div>
        <NavBar />
        <Box
        display="flex"
        alignItems="center" 
        justifyContent="center" 
      >
        <h1>Welcome to How To Abroad!</h1>
      </Box>
        </div>
    )
}
export default HomePage