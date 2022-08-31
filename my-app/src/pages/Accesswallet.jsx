import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Meta from "../images/Meta.png";
import { useNavigate } from "react-router-dom";
import App from "../images/App.png";
import Wallet from "../images/Hwallet.png";
import {  useEffect,useState } from "react";

function Accesswallet() {
  const [web3Api,setweb3Api]= useState({
provider:null,
web3:null

  })
   
useEffect(()=>{

  const loadprovider = async ()=>{
 let provider = null;
 if (Window.ethereum){
  provider=window.ethereum;
} else if(window.web3){
  provider= window.web3.currentProvider;
 }
 

  };
  loadprovider(); 
},[]);



    const [name, setName] = React.useState("");
    let navigate = useNavigate();
    const handleChange = (event) => {
      setName(event.target.value);}
  return (
    <>
     <div
        style={{
          height: "100%",
        //   position: "absolute",
          zIndex: "-100",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          backgroundColor: "#184f90",
          paddingTop:"28px",paddingBottom:"28px",marginBottom:"24px"
        }}
      >
        <Typography variant="h5" align="center" color="white" sx={{ fontWeight: "bold" }}>
          <br></br>
          Access My Wallet
        </Typography>
        <br></br>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box style={{ width: "50%" }}>
            <Grid container spacing={5}>
              <Grid item md={12}>
                <Paper
                  elevation={6}
                  onClick={() =>
                    window.open(
                      "/"
                    )
                  }
                  sx={{
                    cursor: "pointer",
                    color: "black",
                    position: "relative",
                    py: 4,
                    pl: 2,
                    background: "white",
                  }}
                >
                  <Grid container display={"flex"}>
                    <Grid item sm={3} md={3}>
                      <img
                        src={"https://www.myetherwallet.com/img/icon-enkrypt-block.cb05ee30.svg"}
                        alt="Logo"
                        height="70px"
                        style={{ background: "transparent" }}
                      />
                    </Grid>
                    <Grid item sm={9} md={9}>
                      <Box>
                        <h3 style={{ fontWeight: "bold" }}>
                    Enkrypt
                        </h3>

                        <p>
                        Connect with Enkrypt browser extension
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper
                  elevation={6}
                  onClick={() => window.open("/")}
                  sx={{
                    cursor: "pointer",
                    color: "black",
                    position: "relative",
                    py: 4,
                    pl: 2,
                    background: "white",
                  }}
                >
                  <Grid container display={"flex"}>
                    <Grid item sm={3} md={3}>
                      <img
                        src={App}
                        alt="Logo"
                        height="70px"
                        style={{ background: "transparent" }}
                      />
                    </Grid>
                    <Grid item sm={9} md={9}>
                      <Box>
                        <h3 style={{ fontWeight: "bold" }}>
                          MEW Wallet APP    
                        </h3>

                        <p>
                        Connect MEW Wallet app to MEW web
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item md={12}>
                <Paper
                  elevation={6}
                  onClick={async()=>{

                    const accounts = await window.ethereum.request({method:"eth_requestAccounts"}).then((res) =>{
                      navigate("/Dashboard/panel")
                    })
                    console.log(accounts);
                  }}
                  sx={{
                    cursor: "pointer",
                    color: "black",
                    position: "relative",
                    py: 4,
                    pl: 2,
                    background: "white",
                  }}
                >
                  <Grid container display={"flex"}>
                    <Grid item sm={3} md={3}>
                      <img
                        src={"https://www.myetherwallet.com/img/icon-extensions.fbf7b80e.png"}
                        alt="Logo"
                        height="70px"
                        style={{ background: "transparent" }}
                      />
                    </Grid>
                    <Grid item sm={9} md={9}>
                      <Box>
                        <h3 style={{ fontWeight: "bold" }}>
                         Broweser Extension
                        </h3>

                        <p>
                    Use your Web3 wallet with MEW
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </div>
    </>
  )
}

export default Accesswallet