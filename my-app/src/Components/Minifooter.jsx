import React from 'react'
import { Typography, Grid, Box } from "@mui/material";
import { Container } from "@mui/system";    

function Minifooter() {
  return (
    <Box bgcolor="#192133" color="#26a69a">
<Container maxWidth="lg">
    <Grid container spacing={5}>
<Grid item xs={12}sm={4}>
    <Box sx={{display:"flex", justifyContent:"center"}}> 
 <p>© 2022 MyEtherWallet. All rights reserved. Pricing taken from CoinGecko.</p>
 </Box>
</Grid>

    </Grid>
</Container>

    </Box>
  )
}

export default Minifooter