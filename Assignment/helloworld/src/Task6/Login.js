import React from 'react'
import './login.css'
import { Button } from 'react-bootstrap'
function Login() {
  let imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAABkPrq5Ii4C10QBxgGtAUOTXVJT3YFsHHQ&usqp=CAU"
  return (
    
    <div className='containerLogin'>
      <div className='photo'>
        <img src={imgSrc} alt='hi'></img>
      </div>
      <div className='memberlogin'>
        
        <div className="d-grid gap-4">
        <h1>Member Login</h1>
        <input type='text' placeholder='Enter UserId'></input>
        <input type='password' placeholder='Password' size={'lg'}></input>
        <Button variant='success' size='lg'>Login</Button>
        <p>Forgot <span style={{color:"green"}}>Username/Password?</span></p>
        <p><span style={{color:"green"}}>Create Account</span></p>
        </div>
        

      </div>
    </div>
  )
}

export default Login
