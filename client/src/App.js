import React,{useState,createContext} from 'react'
import './App.css';
import {Link, Route} from 'react-router-dom'
//components

import Posts from './components/posts'
import Comments from './components/comments'

import MyContextProvider from './Contexts'

function App() {


 console.log('app logs')

 

  
  return (
    <div className="App">
      <Link to ='/'> Home</Link>
      <Route path='/' Component={Posts}/>
     
     <h1>Welcome to posts app</h1>
      
        <Posts/>
        <Comments/>
   
        
     
    </div>
  );
}

export default App;
