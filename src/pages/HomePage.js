import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

export default function HomePage() {

  const [priceData, setPriceData] = useState([])

  function getPriceData(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("< DATA ENDPOINT >", requestOptions)
      .then(response => response.json())
      .then(result => 
        setPriceData(result))
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    getPriceData()

  },[])

  return (
    <Container sx={{pt:4}} maxWidth="lg">
    <Grid container spacing={2}>
    <Grid item xs={12} display="flex" justifyContent="start" alignItems="start">
      <Typography sx={{color: '#00ed63'}} variant='h3' gutterBottom>
        Energy prices
      </Typography>
    </Grid>
    <Grid id="chart" item xs={12} display="flex" justifyContent="center" alignItems="center">
    <BarChart
          width={1200}
          height={300}
          data={priceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Energy price" dataKey="avgEnergyPrice" fill="#8884d8" />
        </BarChart>
    </Grid>

  </Grid>
  </Container>
  )
}
