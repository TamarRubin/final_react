import React, { useState, useEffect } from "react";
import axios from "axios";

const Manager = () => {
  const [adsID, setAdsID] = useState([])
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/getAllUsers")
      .then(res => {
        console.log(res.data);
        setusers(res.data);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    let unmounted = false;
    axios.get('http://localhost:5000/getAllAdsToConfirm').then(res => {

      for (var i = 0; i < res.data.length; i++) {
        debugger
        setAdsID(state => [...state, res.data[i]])
        console.log(res.data[i].id);
        console.log("adsID", adsID);
      }
    })
    return () => { unmounted = true };

  }, []);
  return (
    <h1> HELLO manager !!! </h1>
  );
}

export default Manager;