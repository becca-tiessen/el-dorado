import React from 'react';
import {Home} from '@styled-icons/boxicons-solid/Home';
import {PersonCircle} from '@styled-icons/ionicons-outline/PersonCircle'
import { useHistory } from "react-router-dom";
import { Header, Anchor} from 'grommet';

const NavigationBar = () => {
  let history = useHistory();
  return (
    <>
    <Header height = "7%" background="accent4" pad="medium">
        <Anchor onClick={()=>{history.push('/')}} icon={<Home size = '10%' />}  />
        <Anchor onClick={()=>{history.push('/garageProfile')}} icon={<PersonCircle size = '10%'/>}  />
        <Anchor onClick={()=>{history.push('/garageProfile')}} icon={<PersonCircle size = '10%'/>}  />
        <Anchor onClick={()=>{history.push('/garageProfile')}} icon={<PersonCircle size = '10%'/>}  />
    </Header>
</>
  )
}
export default NavigationBar;