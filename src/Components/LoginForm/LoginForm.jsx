import React from 'react';
import './LoginForm.css';
import user_icon from 'C:/Users/e031697/OneDrive - Telstra/Documents/react_project/src/Components/Assets/person.jpeg';
import password_icon from 'C:/Users/e031697/OneDrive - Telstra/Documents/react_project/src/Components/Assets/lock.jpeg';
const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="inputbox">
          <input type="text" placeholder='Username' required/>
          <img src={user_icon} alt="" className="icon"/>
        </div>
        <div className="inputbox">
          <input type="password" placeholder='Password' required/>
          <img src={password_icon} alt="" className="icon"/>
        </div>
        <div className="remember">
          <label><input type="checkbox" />  Remember me </label>
          <a href='#'>Forgot Password ?     </a>
        </div>

        <button type='submit'>Login</button>
      
        <div className="register">
          <p>Don't have account ? <a href= '#'>Register</a></p>
        </div>

      </form>
      </div>
  )
}

export default LoginForm