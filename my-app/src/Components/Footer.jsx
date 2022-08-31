import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    // <footer>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="white"
      color="black"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} spacing={5}>
            <Box sx={{ fontWeight: "bold" }} borderBottom={1}>
              Affiliate Hardware Wallets
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("https://shop.ledger.com/?r=fa4b")}
            >
              Ledger
            </Box>

            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("https://shiftcrypto.ch/?ref=mew")}
            >
              BitBox02
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() =>
                window.open(
                  "https://ether.cards/?utm_source=mew&utm_medium=cpm&utm_campaign=site"
                )
              }
            >
              Ether Cards
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("https://trezor.io/")}
            >
              Trezor
            </Box>

            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() =>
                window.open(
                  "https://keepkey.myshopify.com/?afmc=pi&utm_campaign=pi&utm_source=leaddyno&utm_medium=affiliate"
                )
              }
            >
              KeepKey
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() =>
                window.open(
                  "https://shop.sirinlabs.com/?rfsn=2397639.54fdf&utm_source=refersion&utm_medium=affiliate&utm_campaign=2397639.54fdf"
                )
              }
            >
              Finney
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() =>
                window.open(
                  "https://www.coolwallet.io/cobranded-mew-intro/?ref=myetherwallet1"
                )
              }
            >
              CoolWallet
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() =>
                window.open(
                  "https://privacypros.io/?afmc=2j&utm_campaign=2j&utm_source=leaddyno&utm_medium=affiliate"
                )
              }
            >
              Billfodl
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ fontWeight: "bold" }} borderBottom={1}>
              MEW
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              About us
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Careers
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              How its Work
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Team
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Help Center
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Customer Support
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ fontWeight: "bold" }} borderBottom={1}>
              Tools
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              MEW Wallet
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              MetaMask
            </Box>

            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Verify message
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Convert units
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Generate keystore file
            </Box>
            <Box
              sx={{ cursor: "pointer" }}
              mt={2}
              onClick={() => window.open("/")}
            >
              Send Offline Helper
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <SocialIcon url="https://twitter.com/jaketrent" />
          <SocialIcon url="https://facebook.com/jaketrent" />
          <SocialIcon url="https://youtube.com/jaketrent" />
          <SocialIcon url="https://instagram.com/jaketrent" />
          <SocialIcon url="https://Linkdln.com/jaketrent" />
        </Box>
      </div>
    </Box>

    // </footer>
  );
}

export default Footer;
