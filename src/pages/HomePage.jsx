import React from 'react'
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import BasicStack from '../components/heading';
import HorizontalLabelPositionBelowStepper from '../components/step';
import MultipleSelect from '../components/dropdown';
import AllCollapseExample from '../components/accor';
import MiddleSexction from '../components/middlesec';
import Types from '../components/typo';
import  Navbar  from '../components/navber';
export default function HomePage() {
  return (

    // sx={{ width: '100%',display:'flex',justifyContent:'flex-start',paddingLeft:3,paddingTop:2 }}
    <Box>
      {/* <Navbar /> */}
     <BasicStack />
      <HorizontalLabelPositionBelowStepper />
      <MultipleSelect />
      <Types />
      <AllCollapseExample />
      <MiddleSexction /> 
    
    <div>HomePage</div>

    <Stack spacing={2}>
    <h1>Book your defective or repairable device</h1>
 </Stack>
 </Box>
  )
}
