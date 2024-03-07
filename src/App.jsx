import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={user ? <Navigate replace to="/products/:category" /> : <Login />} />
        <Route path="/product/:id" element={user ? <Navigate replace to="/product/:id" /> : <Login />} />
        <Route path="/productList" element={user ? <Navigate replace to="/productList" /> : <Login />} />
        <Route path="/cart" element={user ? <Navigate replace to="/cart" /> : <Login />}/>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
  
};

export default App;