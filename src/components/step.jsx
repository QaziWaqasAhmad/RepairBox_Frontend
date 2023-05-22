import React, { useState } from 'react';
import {  Steps } from 'antd';

const Step= () => {
  const [current, setCurrent] = useState(0);
  // const items.style={{}}

  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <>
      <Steps
      style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}
        current={current}
        onChange={onChange}
        items={[
          {
            title: '-',
            description:'REPAIR DEVICE',
          },
          {
            title: '-',
             description:'PRIORITY LEVEL',

          },
          {
            title: '-',
             description:'INFORMATION & PAYMENT',

          },
        ]}
      />
      
    </>
  );
};

export default Step;