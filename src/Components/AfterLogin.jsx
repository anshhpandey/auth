import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const AfterLogin = ({name}) => {

    const navigate = useNavigate()

    const handleLogout = ()=> {
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
           console.log(error)
          });
          
    }
    
  return (
    <>
    <div className="login afterlogin">
        <div className="main">
            Welcome {name}, You have Successfully logged in. 
        </div>
        <div className="nav">
            <button onClick={handleLogout} className='logout'>Logout</button>
        </div>
    </div>
    </>
  )
}

export default AfterLogin