import React from 'react';
import Home from './routs/home/home.component'
import Navigation from './routs/navigation/navigation.component'
import {Routes, Route} from 'react-router-dom';
import Signin from './routs/Sign-in.component';

const Shop = ()=>{
  return (
    <div>
      <h1>Hii there </h1>
    </div>
    
  )
}
const App =() =>{
 return ( 
 <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element ={<Home/>}/>
      <Route path = 'shop' element ={<Shop/>}/>
      <Route path = 'sign-in' element ={<Signin/>}/>
      
    </Route>
  </Routes>)

}
export default App;
// https://youtu.be/osKnDbHibig