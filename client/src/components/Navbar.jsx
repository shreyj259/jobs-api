import { Box, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",backgroundColor:"#ffffff",py:2,px:4}}>
        <Box>
            <Typography sx={{fontWeight:600,color:"#555555",fontSize:"24px"}}>
            Jobs <span className='primary-color-text'>App</span> 
            </Typography>
        </Box>
        <Box>

        </Box>
    </Box>
  )
}

export default Navbar