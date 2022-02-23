import React, { useState, useEffect,useStateIfMounted }  from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'

import Ad from './Ad'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  const [adsID, setAdsID] = useState([])
  useEffect(() => {
    let unmounted = false; 
    axios.get('http://localhost:5000/getAllOkAds').then(res => {
     
      for (var i = 0; i < res.data.length; i++) {
       debugger       
        setAdsID(state =>[...state, res.data[i]])
        console.log(res.data[i].id);
      }
    })
    return () => { unmounted = true };
  
  }, [])

  return (
    // <div style={{ backgroundColor: 'orange'}}>
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <main>
      <Grid container spacing={2} columns={16}>


</Grid>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={15}>
            {adsID.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                
                <Ad ad={card} ></Ad>
               
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
      {/* End footer */}
    </ThemeProvider>
    </div>
  );
}