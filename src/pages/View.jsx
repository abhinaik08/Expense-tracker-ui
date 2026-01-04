import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExpenseTable from '../component/Table'
import FloatingAddButton from '../component/FloatingAddButton'
import axios from 'axios'

export default function View() {
  const[allExpenses,setAllExpenses]=useState([])
  const fetchAllExpenses=async()=>{
    try {
      const res=await axios.get(`http://localhost:7000/api/expense/view/:all`);
      // console.log(res.data)
      if (res.data.success) {
        setAllExpenses(res.data.expenses)
      } else {
        
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    fetchAllExpenses()
  },[])
  // console.log(allExpenses)
  return (
    <Box>
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h4'>Expence List</Typography>
        </Box>
        <Box sx={{p:2}}>
            <ExpenseTable allExpenses={allExpenses}fetchAllExpenses={fetchAllExpenses}/>
        </Box>
        <FloatingAddButton/>
    </Box>
  )
}
