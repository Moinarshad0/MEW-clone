import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Meta from "../images/Meta.png";
import { useNavigate } from "react-router-dom";
import App from "../images/App.png";
import Wallet from "../images/Hwallet.png";

function Create() {
  const [name, setName] = React.useState("");
  let navigate = useNavigate();
  const handleChange = (event) => {
    setName(event.target.value);
  };

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
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
          <br></br>
          Create a new wallet
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
                      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
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
                        src={Meta}
                        alt="Logo"
                        height="70px"
                        style={{ background: "transparent" }}
                      />
                    </Grid>
                    <Grid item sm={9} md={9}>
                      <Box>
                        <h3 style={{ fontWeight: "bold" }}>
                          Install MetaMask Browser Extension
                        </h3>

                        <p>
                          MetaMask official browser extension. Connect to web3
                          on Ethereum and Polkadot manage your NFTs, buy send
                          and Swap
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper
                  elevation={6}
                  onClick={() => window.open("https://www.mewwallet.com/")}
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
                          Download MEW Wallet App
                        </h3>

                        <p>
                          our officical mobile app to Create your wallet, and
                          Connect to MEW Web using your mobile phone
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item md={12}>
                <Paper
                  elevation={6}
                  onClick={() => window.open("")}
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
                        src={Wallet}
                        alt="Logo"
                        height="70px"
                        style={{ background: "transparent" }}
                      />
                    </Grid>
                    <Grid item sm={9} md={9}>
                      <Box>
                        <h3 style={{ fontWeight: "bold" }}>
                          Buy A Hardware Wallet
                        </h3>

                        <p>
                          For the highist Standard of Security, buy a hardware
                          Wallet and use it with MEW
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
  );
}

export default Create;
