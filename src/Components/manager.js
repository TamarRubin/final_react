import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Grid } from '@mui/material'
import Ad from './Ad'
import { Button } from 'react-bootstrap'

const Manager = () => {
  const [adsID, setAdsID] = useState([])
  const [users, setusers] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/getAllUsers')
      .then(res => {
        console.log(res.data)
        setusers(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    let unmounted = false
    axios.get('http://localhost:5000/getAllAdsToConfirm').then(res => {
      
            // for (var i = 0; i < res.data.length; i++) {
             
            //   setAdsID(state =>[...state, res.data[i]])
            //   console.log(res.data[i].id);
            // }
      console.log('adsID', res.data)

      for (var i = 0; i < res.data.length; i++) {
        debugger
        setAdsID(state => [...state, res.data[i]])
        console.log(res.data[i].id)
        console.log('adsID', adsID)
      }
    })
    return () => {
      unmounted = true
    }
  }, [])
  const setStatus = id => {
    axios.post('http://localhost:5000/ConfirmAdById/' + id).then(res => {
      setAdsID(adsID.filter(a => a.id != id))
      console.log('ConfirmAdById', res.data)
    })
  }
  return (
    <div>
      {/* <h1> HELLO manager !!! </h1> */}

      <Container sx={{ py: 8 }} maxWidth='md'>
        {/* End hero unit */}
        <Grid container spacing={15}>
          {adsID.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <div>
                <span>
                  <Button
                    variant='primary'
                    onClick={() => {
                      setStatus(card.id)
                    }}
                  >
                    מאושר
                  </Button>
                </span>
                <span>
                  <Button variant='primary' onClick={() => {}}>
                   לא מאושר
                  </Button>
                </span>
              </div>
              <Ad ad={card}></Ad>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    </div>
  )
}

export default Manager
