

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMsg('Please fill all the details');
      return;
    }

    setErrorMsg('');

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      updateProfile(user, {
        displayName: name
      })
      navigate('/')
    } catch (error) {
      setErrorMsg(error.message);
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name </label>
            <input
              type="text"
              value={name}
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email </label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password </label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorMsg}</p>
            <button type="submit">SignUp</button>
          </form>
          <span>
            Already have an account? 
            <Link className="spanLink" to="/login"> Login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
