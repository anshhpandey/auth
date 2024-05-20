import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import AfterLogin from "./Components/AfterLogin";

function App() {

  const [username, setUsername] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName)
        console.log(username)
      }else setUsername('')
    })
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home name={username}/>}/>
          <Route  path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/afterlogin" element={<AfterLogin name={username}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
