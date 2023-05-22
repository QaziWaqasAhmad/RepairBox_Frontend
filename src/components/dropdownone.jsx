import * as React from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Basic from './dropdowntwo';


export default function BasicSelect() {
    const [age, setAge] = React.useState('');
  const [new_value,setnew_value]= React.useState("")
    
  const handleChange = (event) => {
    setAge(event.target.value);
    // console.log(event)
    const {
      target: { value },
    } = event;
    setAge(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
      // console.log(value,"value"),
      setnew_value(value)
      
    );
  };
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
                <Box sx={{ width: '30%' }} ><h4 >Select Your Device</h4>
                    <p>Available devices for selected brand.</p>
                </Box>
                <FormControl sx={{ width: "70%", float: 'left' }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Device</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

            </Box>
            {new_value ?


                <Basic /> : null
            }

        </>

    );
}
