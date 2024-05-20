import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Home = ({name}) => {
  
  return (
    <div className='login homepage'>
        <h1 className='heading'>Authentication Application</h1>
        
        <div className="links">
        <button>
        <Link to='/login' className='ff'>Login</Link>
        </button>

     
        <button>
        <Link to='/signup' className='ff'>SignUp</Link>
        </button>

        </div>
     


    </div>
  )
}

export default Home