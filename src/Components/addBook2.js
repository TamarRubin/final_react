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
import MenuItem from '@mui/material/MenuItem';
import { Form } from 'react-bootstrap'
//import './signUp.css'
import axios from 'axios'

//import { Link } from 'react-router-dom'
import {
  BrowserRouter,
  Redirect,
  useHistory,
  useParams
} from 'react-router-dom'
import AddNewBook from './addNewBook'
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



function AddNewBook2 (props) {
  const [bookName, setBookName] = useState()
  const [bookId, setBookId] = useState()

  // const [writerName,setWriterName] = useState();
  // const [publishName,setPublishName] = useState();
  // const [category,setCategory] = useState();
  // const [isbn,setIsbn] = useState();
  // const [image,setImage] = useState();
  // const [price,setPrice] = useState();
  const [writerName, setWriterName] = useState(null)
  const [publishName, setPublishName] = useState(null)
  const [category, setCategory] = useState(null)
  const [isbn, setIsbn] = useState(null)
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState(null)
  let {name} = useParams()
  const history = useHistory()
  
  const handleEvent = (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    alert('name: '+ name)
    console.log('name: ',name )
    debugger
    axios
      .post('http://localhost:5000/AddBook', {
        isbn: data.get('isbn'),
        name: name,
        publishing:1,// data.get('publishing'),
        writer:1,// data.get('writer'),
        status: 1,
        image: "image.jpg",
        confirm: 0
      })
      .then(res => {
        console.log('res from add book', res)
        debugger
        history.push(`/addPrice/${name}/${0}`)
      })
  }
 
  
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
 
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
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
            פרטי ספר חדש
            </Typography>
            <Box component="form" noValidate onSubmit={handleEvent} sx={{ mt: 1 }}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="writer"
                label="סופר"
                name="writer"
                autoComplete="writer"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="publishing"
                label="הוצאה לאור"
                name="publishing"
                autoComplete="publishing"
                autoFocus
              />*/}
         
              
              <Form.Select
                   aria-label="Default select example"
                    margin='normal'
                    fullWidth
                    id="writer"
                    label="סופר"
                    name="writer"
                    autoComplete="writer"
                    autoFocus>
      <option>סופר</option>
      {/* {cities?.map(city => <option key={city?.name}>{city?.name}</option>)} */}
   </Form.Select>
                  <Form.Select
                   aria-label="Default select example"
                    margin='normal'
                    fullWidth
                    id="publishing"
                label="הוצאה לאור"
                name="publishing"
                autoComplete="publishing"
                autoFocus>
      <option>קטגוריה</option>
      {/* {cities?.map(city => <option key={city?.name}>{city?.name}</option>)} */}
    </Form.Select>
    
    <TextField
                margin="normal"
                required
                fullWidth
                id="isbn"
                label="isbn"
                name="isbn"
                autoComplete="isbn"
                autoFocus
              />
            <TextField
            fullWidth
            id="publishing"
          select
          label="הוצאה לאור"
          value={currency}
          onChange={handleChange}
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <form >
  <input type="file" id="myFile" name="filename" ></input>

</form> 
{/* 
 
  <Button
                type="file"
                id="myFile"
                 name="filename"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                הוספת תמונה
          </Button>     */}

            
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                שלח לבדיקה
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
export default AddNewBook2
