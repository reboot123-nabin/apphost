import logo from './logo.svg';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React,{useState,useEffect} from "react";
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';
import EditProfile from './Component/EditProfile';
import Body from './Component/Body';
import UpdateUser from './Component/UpdateUser';
import AddBlog from './Component/AddBlog';
import PostBlog from './Component/PostBlog';


function App() {

 

  return (
    <div className="App">
    <BrowserRouter>

<Routes>
          <Route path="/" exact element={<Body/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<SignUp/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
       <Route path="/editprofile" exact element={<EditProfile/>}/>
   
       <Route path="/updateuser/:id" exact element={<UpdateUser/>}/>
       <Route path="/blog" exact element={<AddBlog/>}/>
       <Route path="/addblog" exact element={<PostBlog/>}/>
       
  


    
             
</Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
