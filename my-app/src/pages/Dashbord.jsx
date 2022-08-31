import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid, Avatar } from "@mui/material";
import { Paper } from "@mui/material";
import detactEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../utils/load-contract";
import contract from "@truffle/contract";
import Web3 from "web3";
import Drawer from "./Drawer";
import { width } from "@mui/system";

function Dashbord() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setaccount] = useState(null);
  const [Balance, setBalance] = useState(null);
  const [reload, setreload] = useState(false);

  const [AccountBalance, setAccountBalance] = useState(null);

  const reloadeffect = () => {
    setreload(!reload);
  };
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detactEthereumProvider();
      const contract = await loadContract("Wallet", provider);
      if (provider) {
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
        console.error("please install Metamask");
      }
    };

    loadProvider();
  }, []);
  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    };
    web3Api.contract && loadBalance();
  }, [web3Api, reload]);
  useEffect(() => {
    const AccountBalance = async () => {
      const { web3 } = web3Api;
      const balanceAccount = await web3.eth.getBalance(
        "0xb6bEfa253b391F34b56E062912a3c77cbBD2285F"
      );
      setAccountBalance(web3.utils.fromWei(balanceAccount, "ether"));
    };
    web3Api.contract && AccountBalance();
  }, [web3Api, reload]);

  const withdraw = async () => {
    const { contract, web3 } = web3Api;
    const withdraw = web3.utils.toWei("10", "ether");
    await contract.withdraw(withdraw, {
      from: account,
    });
    reloadeffect();
  };

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setaccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);
  const transferFund = async () => {
    const { web3, contract } = web3Api;
    await contract.transfer({
      from: account,
      value: web3.utils.toWei("2", "ether"),
    });
    reloadeffect();
  };

  const navigate = useNavigate();
  return (
    <>
    
      <Drawer/>
    <Grid pt={6} container sx={{ backgroundColor: "#184f90" }}>
      <Box style={{ width: "50%" }}>
        <Grid item pl={12} pt={6} md={6}>
          <img
            src={
              "https://www.myetherwallet.com/img/bg-home-spaceman-and-dog.313ea5b0.svg"
            }
            alt="Logo"
            // width="500"

            height="500"
            // style={{ background: "yellow"}}
          />
        </Grid>
      </Box>

      <Grid
        item
        pt={4}
        xs={12}
        md={6}
        pr={3}
        marginTop={5}
        zIndex={1000}
        sx={{ display: "flex" }}
      >
        <Grid container>
          <Grid item md={12}>
            <Paper
              elevation={6}
              // py={2}
              // px={12}
              sx={{
                height: 100,
                 width: 600,
                marginRight: 5,
                color: "black",
                position: "relative",
                background: "#27d6ed",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <Typography variant="h5" align="center">
                Your Balance: {Balance} ETH
                
              </Typography>
            </Paper>

            <Paper
              elevation={6}
              // py={2}
              // px={12}
              sx={{
                height: 100,
                width: 600,
                marginTop:"30px",
                color: "black",
                position: "relative",
                background: "#27d6ed ",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <Typography variant="h6" align="center">
                Account:  {account ? account : "Not conected"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={12}>
            <Typography align="center" marginTop={5}>
              <Button
                variant="outlined"
                onClick= {transferFund}
                sx={{
                  color: "white",
                  backgroundColor: "#05c0a5",
                  height: "62px",
                  padding: "0 46px",
                  borderRadius: 10,
                  marginRight: 6,
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                Transfer
              </Button>

              <Button
                variant="outlined"
                onClick={withdraw}
                sx={{
                  color: "white",
                  backgroundColor: "#05c0a5",
                  height: "62px",
                  padding: "0 46px",
                  borderRadius: 10,
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                withdraw
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        {/* <Box > */}
        <img
          style={{ marginTop: "-525px", marginBottom: "-70px", width: "100%" }}
          src={"https://www.myetherwallet.com/img/bg-homepage.49974364.svg"}
        />
        {/* </Box> */}
      </Grid>
    
    </Grid>
    </>
  );
}

export default Dashbord;
