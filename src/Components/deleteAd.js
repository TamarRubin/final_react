import React, { useState } from 'react'
//import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import rtlPlugin from 'stylis-plugin-rtl';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import MenuBookIcon from '@mui/icons-material/MenuBook';
//import { Form, Button } from 'react-bootstrap'
//import './signUp.css'
import axios from 'axios'

//import { Link } from 'react-router-dom'
import {
  BrowserRouter,
  Redirect,
  useHistory,
  useParams
} from 'react-router-dom'

function Copyright(props) {
  return (
    
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       שוק-בוק
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
const theme = createTheme();

function DeleteAd () {
  const [bookName, setBookName] = useState()
  const [bookId, setBookId] = useState()

  // const [writerName,setWriterName] = useState();
  // const [publishName,setPublishName] = useState();
  // const [category,setCategory] = useState();
  // const [isbn,setIsbn] = useState();
  // const [image,setImage] = useState();
  // const [price,setPrice] = useState();
  const history = useHistory()

  const handleEvent = (event) => {
      alert("המודעה הוסרה בהצלחה")
      history.push("/")
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log('book', data.get('book'))
    // axios.get(`http://localhost:5000/getIdBookByName/${data.get('book')}`).then(res => {
    //   console.log('res', res)

    //   if (res.data.length != 0) {
    //     alert("הספר קיים במערכת")
    //     history.push(`/addPrice/${data.get('book')}/${1}`)
    //   } else {
    //     history.push(`/AddNewBook/${data.get('book')}`)
       
    //   }
    // })
  }

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
       
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
              <MenuBookIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             נשמח לראותך שוב
            </Typography>
            <Box component="form" noValidate onSubmit={handleEvent} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="book"
                label="הכנס מספר מודעה"
                name="book"
                autoComplete="book"
                autoFocus
              />
            
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               הסר
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
               
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://yefe.co.il/wp-content/uploads/2021/12/%D7%A7%D7%A8%D7%90.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
    </CacheProvider>
  );
}
export default DeleteAd
