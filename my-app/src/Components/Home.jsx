import React from "react";
import Box from "@mui/material/Box";
import images from "../images/back.png";
import { Typography, Grid, Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Eth from "../Tabsoages/Eth";
import Dapps from "../Tabsoages/Dapps";
import image from "../images/back2.png";
import New from "../images/backCard.png";
import { SocialIcon } from "react-social-icons";
import { Paper } from "@mui/material";
import Set from "../images/Started.jpg";
import { useNavigate } from "react-router-dom";
import ledger from "../images/Ladger.png";
import trezor from "../images/trezor.png";
import bitbox from "../images/bitbox.png";
import secalot from "../images/secalot.png";
import bito from "../images/Bito.png";
import sirin from "../images/sirin.png";
import keep from "../images/keep.png";
import kyber from "../images/kyber.png";
import change from "../images/changelly.png";
import simple from "../images/simplex.png";
import linch from "../images/linch.png";
import Appstore from "../images/Appstore.png";
import chat from "../images/chat.png"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Home() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <div >
        <Grid pt={6} container sx={{ backgroundColor: "#184f90"}}>
        
          <Grid item xs={12} md={6} marginTop={20} zIndex={1000} >
            <Box sx={{ fontWeight: "bold", }}>
              <Typography
                variant="h3"
                component="h4"
                color="white"
                align="center"
              >
                Ethereum's Original 
               
              </Typography>
              <Typography
                variant="h3"
                component="h4"
                color="white"
                align="center"
              >
               Wallet
               
              </Typography>
              <Typography variant="h6" color="white" align="center">
                MEW (MyEtherWallet) is a free, client-side interface helping you
                interact with the Ethereum blockchain. Our easy-to-use,
                open-source platform allows you to generate wallets, interact
                with smart contracts, and so much more.
              </Typography>
              <Typography align="center" marginTop={5}>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/SendEth")}
                  sx={{
                    color: "white",
                    backgroundColor: "#05c0a5",
                    height: "62px",
                    padding: "0 46px",
                    borderRadius: 10,
                    "&:hover": {
                      backgroundColor: "#05c0a9",
                    },
                  }}
                >
                  Create a New Wallet
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => navigate("/AccessWallet")}
                  sx={{
                    color: "#05c0a5",

                    height: "62px",
                    padding: "0 46px",
                    borderRadius: 10,
                    borderColor: "#05c0a5",
                    marginLeft:"15px"
                  }}
                >
                  Access Your Wallet
                </Button>
                 
              </Typography>
             
            </Box>
          </Grid>

          <Grid item xs={12} md={6} marginTop={5} zIndex={1000} sx={{ display:"flex", justifyContent:"flex-end"}}>
            <img
              src={"https://www.myetherwallet.com/img/bg-home-spaceman-and-dog.313ea5b0.svg"}
              alt="Logo"
              // width="500"

              height="500"
              // style={{ background: "yellow"}}
            />
          </Grid>
          <Grid item xs={12}>
          {/* <Box > */}
              <img 
              style={{marginTop:"-525px", marginBottom:"-70px", width:"100%"}}
              src={"https://www.myetherwallet.com/img/bg-homepage.49974364.svg"}
            />
            {/* </Box> */}
          </Grid>
        </Grid>
        <br></br>
        <Typography variant="h6" color="#184f90" align="center"mt={15}>
          FEATURES
        </Typography>
        <br></br>
        <Typography variant="h4" color="black" align="center">
          Your Gateway to the <br></br>
          Ethereum Blockchain
        </Typography>

        <br></br>
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            align: "center",
            width: "100%",

            borderRadius: 10,
          }}
        >
          <Box sx={{ width: "80%" }}>
            <AppBar sx={{bgcolor:"white", borderRadius:"40px"}} position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="white"
                textColor="inherit"
                variant="fullWidth"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: 50,
                }}
                aria-label="full width tabs example"
              >
                <Tab label="ETH" {...a11yProps(0)} />
                <Tab label="Swap" {...a11yProps(1)} />
                <Tab label="DApps" {...a11yProps(2)} />
                <Tab label="Tokens" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Eth />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Dapps></Dapps>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Four
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Box>
      </div>
      <Grid container sx={{ backgroundColor: "#eee" }}>
        <Grid item xs={12} md={6} marginTop={20}>
          <Box sx={{ fontWeight: "bold" }}>
            <Box
              sx={{
                fontWeight: "bold",
                m: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ height: 28, marginBottom: "16px", border: "none" }}
                src={
                  "https://www.myetherwallet.com/img/icon-enkrypt-colored.d47ef2e7.svg"
                }
              />
            </Box>
            <Typography
              variant="h3"
              component="h4"
              color="black"
              align="center"
            >
              Introducing MEW’s multichain wallet extension <br />
            </Typography>
            <Typography variant="h6" color="rgb(96 102 109)" align="center">
              Easily access all you favorite apps across Ethereum and Polkadot
              chains, buy crypto, swap tokens, and manage your NFTs. Welcome to
              the multichain future.
            </Typography>
            <Typography align="center" marginTop={5}>
              <Button
                variant="outlined"
                onClick={() =>
                  window.open(
                    "https://chrome.google.com/webstore/detail/enkrypt-ethereum-and-polk/kkpllkodjeloidieedojogacfhpaihoh"
                  )
                }
                startIcon={
                  <Avatar
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                }
                sx={{
                  color: "white",
                  backgroundColor: "rgb(126 68 242)",
                  height: "62px",
                  padding: "0 20px",
                  borderRadius: 10,
                  "&:hover": {
                    backgroundColor: "rgb(126 68 280)",
                  },
                }}
              >
                Install For Chrome
              </Button>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} marginTop={1}>
          <img
            src={image}
            alt="Logo"
            width="600"
            height="600"
            style={{ background: "transparent", backgroundColor: "#eee" }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ backgroundColor: "#f4f4f4" }}>
        <Grid item xs={12} md={6} marginTop={1}>
          <img
            src={New}
            alt="Logo"
            width="600"
            height="600"
            style={{ background: "transparent", backgroundColor: "#f4f4f4" }}
          />
        </Grid>

        <Grid item xs={12} md={6} marginTop={20}>
          <Box sx={{ fontWeight: "bold" }}>
            <Box
              sx={{
                fontWeight: "bold",
                m: 0,
                display: "flex",
                justifyContent: "center",
              }}
            ></Box>
            <Typography
              variant="h3"
              component="h4"
              color="black"
              align="center"
            >
              Home of ETH Block<br></br> NFTs!
            </Typography>
            <Typography variant="h6" color="rgb(96 102 109)" align="center">
              ETH Blocks is an NFT series representing mined Ethereum blocks and
              their properties. Whether it's a special block number, the block
              of your first transaction, or a block that contains a transaction
              with a special message. Own a part of history with ETH Blocks by
              MEW.
            </Typography>
            <Typography align="center" marginTop={5}>
              <Button
                variant="outlined"
                onClick={() =>
                  window.open(
                    "https://chrome.google.com/webstore/detail/enkrypt-ethereum-and-polk/kkpllkodjeloidieedojogacfhpaihoh"
                  )
                }
                sx={{
                  color: "white",
                  backgroundColor: "#05c0a5",
                  borderColor: "#05c0a5",
                  height: "62px",
                  padding: "0 46px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: " #05c0a9",
                  },
                }}
              >
                Access your Wallet To Mint
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          bgcolor="white"
          xs={12}
          px={"25%"}
          mt={15}
          sx={{
            width: "100%",
            // padding: "12%",
            // marginLeft: "auto",
            // marginRight: "auto",
          }}
        >
          <Grid
            item
            xs={12}
            mt={4}
            sx={{ fontWeight: "bold", m: 1, textAlign: "center" }}
          >
            <Typography
              variant="h6"
              color="#192133"
              align="center"
              sx={{
                paddingBottom: "20px",
                fontSize: "2.142rem",
                fontWeight: "700",
              }}
            >
              Join MEW Community
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <SocialIcon url="https://twitter.com/jaketrent" />
          </Grid>
          <Grid item xs={2}>
            <SocialIcon url="https://facebook.com/jaketrent" />
          </Grid>
          <Grid item xs={2}>
            <SocialIcon url="https://youtube.com/jaketrent" />
          </Grid>
          <Grid item xs={2}>
            <SocialIcon url="https://instagram.com/jaketrent" />
          </Grid>
          <Grid item xs={2}>
            <SocialIcon url="https://github.com/jaketrent" />
          </Grid>
          <Grid item xs={2}>
            <SocialIcon url="https://telegram.com/jaketrent" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sx={{ backgroundColor: "white" }}>
            <Box pl={5} mx={10} mt={5}>
              <Paper
                elevation={6}
                mx={5}
                sx={{
                  color: "black",
                  position: "relative",
                  py: 8,

                  backgroundImage: `url(${Set})`,
                  backgroundPosition: "center right -30px",
                  margin: "0 50px",
                  marginTop: "10",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Typography
                  ml={5}
                  variant="h5"
                  color="white"
                  sx={{ marginRight: "30px" }}
                >
                  New to crypto? Explore MEWtopia!
                </Typography>
                <p style={{ color: "white", marginLeft: "50px" }}>
                  Learn how to get the most out of Ethereum with our free
                  library of resources!
                </p>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          bgcolor="white"
          xs={12}
          px={"10%"}
          py={"5%"}
          sx={{
            width: "100%",
            // padding: "12%",
            // marginLeft: "auto",
            // marginRight: "auto",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              paddingTop: "28px",
              paddingBottom: "28px",
              marginBottom: "24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              color="#5a678a"
              align="center"
              sx={{ fontSize: "1.143rem", fontWeight: "700" }}
            >
              PARTNERS
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img
              src={ledger}
              alt="Logo"
              width="70%"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://shop.ledger.com/?r=fa4b")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={trezor}
              alt="Logo"
              width="70%"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() =>
                window.open("https://trezor.io/?offer_id=12&aff_id=2029")
              }
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={bitbox}
              alt="Logo"
              width="70%"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://shiftcrypto.ch/?ref=mew")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={secalot}
              alt="Logo"
              width="70%"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://www.secalot.com/")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={bito}
              alt="Logo"
              width="70%"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://my.bity.com/register")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={sirin}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://sirinlabs.com/")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={keep}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() =>
                window.open(
                  "https://keepkey.myshopify.com/?afmc=pi&utm_campaign=pi&utm_source=leaddyno&utm_medium=affiliate"
                )
              }
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={kyber}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://kyber.network/")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={change}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://changelly.com/")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={simple}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://www.simplex.com/")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={linch}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://app.1inch.io/")}
            />
          </Grid>
          <Grid item xs={2}>
            <img
              src={kyber}
              alt="Logo"
              style={{ cursor: "pointer", maxWidth: "120px", width: "90%" }}
              onClick={() => window.open("https://kyber.network/")}
            />
          </Grid>
        </Grid>

        <Grid container py={15} px={7} sx={{ backgroundColor: "#184f90" }}>
          <Grid
            item
            xs={12}
            md={6}
            // marginTop={20}
            sx={{ display: "flex", alignItems: "cemter" }}
          >
            <Box>
              <Typography
                variant="h3"
                component="h4"
                color="white"
                align="center"
                marginTop="10"
              >
                Ready to explore Ethereum?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={Appstore}
                  alt="Logo"
                  style={{ cursor: "pointer", height: "35px" }}
                  onClick={() => window.open("https://www.mewwallet.com/")}
                />
                <img
                  src={
                    "https://www.myetherwallet.com/img/button-play-store.eb328107.svg"
                  }
                  alt="Logo"
                  style={{ cursor: "pointer", height: "35px" }}
                  onClick={() => window.open("https://www.mewwallet.com/")}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            marginTop={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                onClick={() => navigate("/SendEth")}
                mb={5}
                sx={{
                  color: "white",
                  backgroundColor: "#05c0a5",
                  height: "62px",
                  padding: "0 46px",
                  borderRadius: 10,
                  // marginBottom:"20px",
                  "&:hover": {
                    backgroundColor: "#05c0a9",
                  },
                }}
              >
                Create a New Wallet
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/AccessWallet")}
                sx={{
                  color: "#05c0a5",
                  marginLeft: "15px",
                  height: "62px",
                  padding: "0 46px",
                  borderRadius: 10,
                  borderColor: "#05c0a5",
                }}
              >
                Access Your Wallet
              </Button>
            </Box>
          </Grid>
        </Grid>
        

        
       
      </Grid>
    </>
  );
}

export default Home;
