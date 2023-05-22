import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicSelect from './dropdownone';
import { Box } from '@mui/material';
import '../App.css'

export default function MultipleSelect() {
  
  const [age, setAge] = React.useState([]);
  const [new_value,setnew_value]= React.useState("")
    

  // React.useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => console.log(json,'response.................'))
  // },[])

  // const handleChangeone = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   // setPersonone(
  //   //   // On autofill we get a stringified value.
  //   //   typeof value === 'string' ? value.split(',') : value,
  //   // );
  // };


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

  // React.useEffect(()=>{

  //   if(new_value){
  //     handleChangeone()
  //   }else{
  //     // alert('')
  //   console.log("nooo");
  //   }

  // },[])

  // console.log(new_value,'new_val');


  // const handleChange = (event) => {
  //     setAge(event.target.value);
  // };


  return (
    <div className='dropdown'>
       <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '14px', color: '#4B5563' }}>
            <Box sx={{ width: '30%' }} ><h4 >Select Your Device Brand</h4>
                <p>Brands we repair.</p>
            </Box>
            <FormControl sx={{ width: "70%", float: 'left' }} fullWidth>
                <InputLabel id="demo-simple-select-label">Brands</InputLabel>
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
      { new_value ?

      
    <BasicSelect/> : null
      }
    </div>
  );
}
//    <div className='dropdown'>
//   <Box sx={{width:'30%',fontFamily:'sans-serif',fontSize:'14px',color:'#4B5563',float:'left'  }}><h3 >Select Your Device Brand</h3>
//   <p>Brands we repair.</p>
//   </Box>

//     <Box className='input-dorp' sx={{width:"70%",}}> <FormControl sx={{ m: 1, width: '70%', }}>
//     <InputLabel id="demo-multiple-name-label">Name</InputLabel>
//     <Select
//       labelId="demo-multiple-name-label"
//       id="demo-multiple-name"
//       multiple
//       value={personone}
//       sx={{width:'120%'}}
//       onChange={handleChangeone}
//       input={<OutlinedInput label="Name" />}
//       MenuProps={MenuProps}
//     >
//       {names.map((name) => (
//         <MenuItem
//           key={name}
//           value={name}
//           style={getStyles(name, personone, theme)}
//         >
//           {name}
//         </MenuItem>
//       ))}
//     </Select>
//   </FormControl></Box>
  
// </div>
