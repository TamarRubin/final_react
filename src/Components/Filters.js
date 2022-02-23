import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function Filters () {
  const [cities, setcities] = useState([])
  const [books, setBooks] = useState([])
  const [writers, setWriters] = useState([])
  const [publishings, setPublishings] = useState([])
  const [categories, setCategories] = useState([])
  
  const [city, setcity] = useState('')
  const [book, setBook] = useState()
  const [writer, setWriter] = useState()
  const [publishing, setPublishing] = useState()
  const [category, setCategory] = useState()

  const search = (event)=>{
    alert("let's search")
  }

  useEffect(() => {
    debugger
    axios
      .get('http://localhost:5000/getAllcities')
      .then(res => {
        console.log(res.data)
        setcities(res.data)
      })
      .catch(err => console.log(err))
    axios
      .get('http://localhost:5000/getAllWriters')
      .then(res => {
        console.log(res.data)
        setWriters(res.data)
      })
      .catch(err => console.log(err))

    axios
      .get('http://localhost:5000/getAllBooks')
      .then(res => {
        console.log(res.data)
        setBooks(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))

    axios
      .get('http://localhost:5000/getAllPublishings')
      .then(res => {
        console.log(res.data)
        setPublishings(res.data)
      })
      .catch(err => console.log(err))

    axios
      .get('http://localhost:5000/getAllCategories')
      .then(res => {
        console.log(res.data)
        setCategories(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  const handleCity = (event) => {
    debugger
    setcity(event.target.value);
   // alert(city)
  };
  const handleWriter = (event) => {
    debugger
    setWriter(event.target.value);
   // alert(city)
  };
  const handleBook = (event) => {
    debugger
    setBook(event.target.value);
   // alert(city)
  };
  const handlePub = (event) => {
    debugger
    setPublishing(event.target.value);
   // alert(city)
  };
  const handleCat = (event) => {
    debugger
    setCategory(event.target.value);
  };
  return (
    <div>
          <Box sx={{ minWidth: 60 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">עיר</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="עיר"
          onChange={handleCity}
        >
           
          {cities?.map(c => (
          <MenuItem name={c?.name} value={c?.id}>{c?.name}</MenuItem>
        ))}
         
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">סופר</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={writer}
          label="סופר"
          onChange={handleWriter}
        >
          
          {writers?.map(w => (
          <MenuItem name={w?.name} value={w?.id}>{w?.name}</MenuItem>
        ))}
         
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">ספר</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={book}
          label="ספר"
          onChange={handleBook}
        >
        
          {books?.map(b => (
          <MenuItem name={b?.name} value={b?.id}>{b?.name}</MenuItem>
        ))}
         
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="קטגוריה"
          onChange={handleCat}
        >
         
          {categories?.map(c => (
          <MenuItem name={c?.category} value={c?.id}>{c?.category}</MenuItem>
        ))}
         
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">הוצאה לאור</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={publishing}
          label="הוצאה לאור"
          onChange={handlePub}
        >
        
          {publishings?.map(p => (
          <MenuItem name={p?.name} value={p?.id}>{p?.name}</MenuItem>
        ))}
         
        </Select>
      </FormControl>
        
      <Button sx={{ m: 2.5, minWidth: 120 }} variant="contained" onClick={search}>חיפוש</Button>
    </Box>
   
    </div>
  )
}
export default Filters
