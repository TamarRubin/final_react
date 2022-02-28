import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Form from 'react-bootstrap/Form'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'

import { useHistory } from 'react-router-dom'
import axios from 'axios'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin]
})

function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Michal&Tamar © '}
      <Link color='inherit' href='https://mui.com/'>
        שוק-בוק
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const theme = createTheme({
  direction: 'rtl'
})

export default function SignUpSide () {
  const [cities, setcities] = useState()
  const [nbhoods, setnbhoods] = useState()
  const [city, setcity] = useState('')
  const [nbhood, setnbhood] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:5000/getAllcities')
      .then(res => {
        console.log(res.data)
        setcities(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    debugger
    axios
      .get(`http://localhost:5000/getNeighberhoodById/${city}`)
      .then(res => {
        console.log(res.data)
        setnbhoods(res.data)
        console.log(nbhood)
      })
      .catch(err => console.log(err))
  }, [city])
  const handleChange = e => {
    debugger
    setcity(e.target.value)
  }
  const handleNb = e => {
    debugger
    setnbhood(e.target.value)
  }

  const history = useHistory()
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      password: data.get('phone'),
      mail: data.get('email'),
      password: data.get('password')
    })
    axios
      .post('http://localhost:5000/AddUser', {
        name: data.get('name'),
        phone: data.get('phone'),
        mail: data.get('email'),
        password: data.get('password'),
        cityID : city,
        neighberhoodID : nbhood

      })
      .then(res => {
        console.log('res from sign up', res)
        if (res.status === 200) {
          history.push('/signIn')
        }
      })
  }

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid container component='main' sx={{ height: '100vh' }}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                ברוכים הבאים
              </Typography>
              <Box
                component='form'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='name'
                  label='שם מלא'
                  name='name'
                  autoComplete='name'
                  autoFocus
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='phone'
                  label='טלפון'
                  name='phone'
                  autoComplete='phone'
                  autoFocus
                />

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='כתובת אימייל'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='סיסמה'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <FormControl sx={{ m: 1, minWidth: 550 }}>
                  <InputLabel id='demo-simple-select-label'>עיר</InputLabel>
                  <Select
                    name='cityID'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={city}
                    label='עיר'
                    onChange={handleChange}
                  >
                    {cities?.map(c => (
                      <MenuItem name={c?.name} value={c?.id}>
                        {c?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 550 }}>
                  <InputLabel id='demo-simple-select-label'>שכונה</InputLabel>
                  <Select
                    name='cityID'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={nbhood}
                    label='שכונה'
                    onChange={handleNb}
                  >
                    {nbhoods?.map(c => (
                      <MenuItem name={c?.name} value={c?.id}>
                        {c?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  הרשמה
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    שכחת סיסמה
                  </Link>
                </Grid> */}
                  <Grid item>
                    <Link href='http://localhost:3000/signIn' variant='body2'>
                      {'יש לך חשבון? כניסה'}
                    </Link>
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
              backgroundImage:
                'url(https://yefe.co.il/wp-content/uploads/2021/12/%D7%A7%D7%A8%D7%90.gif)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  )
}
