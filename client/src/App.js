import React,{useState,createContext} from 'react'
import './App.css';
import {Link, Route} from 'react-router-dom'
//components

import Posts from './components/posts'
import Post from './components/post'
import Comments from './components/comments'

import MyContextProvider from './Contexts'
import EditPost from './components/editForm';

function App() {


 console.log('app logs')

 

  
  return (
    <div className="App">
      <Link to ='/'> Home</Link>

      <h1>Welcome to posts app</h1>

      <Route exact path='/' component={Posts}/>
      <Route path='/updatepost/:id'><EditPost/></Route>
      <Route path='/post/:id'><Post/></Route>
  
        
   
        
     
    </div>
  );
}

export default App;
