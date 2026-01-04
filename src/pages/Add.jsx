import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify';

export default function Add() {
  const [formData, setFormData] = useState({
    title: " ",
    amount: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(formData);
  const handleSubmit = async () => {
    // console.log(formData)
    setIsLoading(true);
    try {
      const res = await axios.post(`http://localhost:7000/api/expense/insert`, formData)
      // console.log(res)
      if (res.data.success == true) {
        toast.success(res.data.message)
        setTimeout(() => { navigate("/") }, 2000)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setTimeout(() => { setIsLoading(false) }, 2000)
    }
  };
  return (
    <Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Add Expense Details</Typography>
      </Box>
      <Box sx={{ p: 4, display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:"pink" }}>
        <Paper sx={{ width: '70%', p: 3}}>
          <TextField fullWidth value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} label="Enter Expense title" placeholder='Enter Expense title here' sx={{ mb: 2 }} />
          <TextField fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} label="Enter Expense Amount" placeholder='Enter Expense Amount here' type='number' sx={{ mb: 2 }} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Select Category"
              sx={{ mb: 2 }}
            // onChange={handleChange}
            >
              <MenuItem value={"Transport"}>Transport</MenuItem>
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleSubmit} sx={{ mb: 1 }} loading={isLoading} variant="contained" fullWidth>Submit</Button>
          <Button component={Link} to={"/"} sx={{ mb: 1 }} variant="contained" color="secondary" fullWidth>View Entities</Button>
        </Paper>
      </Box>
    </Box>
  )
}
