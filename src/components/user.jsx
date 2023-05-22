import React from 'react';
import Navbar from './navber';
import 'antd/dist/reset.css';
import BasicStack from './heading';
import HorizontalLabelPositionBelowStepper from './step';
import MultipleSelect from './dropdown';
import Types from './typo';
import AllCollapseExample from './accor';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleSexction from './middlesec';
const User = () => (
  <div className="App">
   
<Navbar/>
<BasicStack/>
<HorizontalLabelPositionBelowStepper/>
<MultipleSelect/>
<Types/>
<AllCollapseExample/>
<MiddleSexction/>
  </div>
);

export default User;