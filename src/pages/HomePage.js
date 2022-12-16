import React, { useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

export default function HomePage() {
  const data = [
  {dateTime: '2022-01-01', price: 100},
  {dateTime: '2022-02-01', price: 450},
  {dateTime: '2022-03-01',  price: 200},
  {dateTime: '2022-04-01',  price: 500},
  {dateTime: '2022-05-01',  price: 300},
  {dateTime: '2022-06-01',  price: 200}];

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
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateTime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Energy price" dataKey="price" fill="#8884d8" />
        </BarChart>
    </Grid>

  </Grid>
  </Container>
  )
}
