import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
const Login = () => {
  const navigate = useNavigate()
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if ( !email || !password) {
      setErrorMsg('Please fill all the details');
      
      return;
    }

    setErrorMsg('');

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      
      navigate('/afterlogin')
    } catch (error) {
      setErrorMsg(error.message);
    }

   
    setEmail('');
    setPassword('');
  };
  return (
    <>
    <div className='login'>
        <div className="login-container">
           
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email  </label>
                <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email address' />
                <label>Password  </label>
                <input type='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />

                <p className="error">{errorMsg}</p>

                <button>Login</button>

            </form>
            <span>Don't have an account ? 
                <Link className='spanLink' to='/signup'>  SignUp</Link>
            </span>
        </div>
    </div>
    </>
  )
}

export default Login