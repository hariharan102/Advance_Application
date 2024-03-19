import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/UserSlice';
import { useDispatch } from 'react-redux';
import "../Login/Login.css"
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authenticate = (e) => {
    e.preventDefault();
    try {
      if (username.length === 0 && password.length === 0) {
        alert('Enter email and password');
      } else if (username.length === 0) {
        alert('Enter Email');
      } else if (password.length === 0) {
        alert('Enter Password');
      } else if (username && password) {
        dispatch(login(username));
        // Simulate successful login without backend request
        console.log('Logged in successfully');
        navigate('/');
      }
    } catch (error) {
      alert('Incorrect UserName and Password');
    }
  };

  return (
    <div className='boo'>
      <div className="containerlogin">
        <form>
          <div className="form5">
            <br></br>
            LOGIN
            <br></br>
            <input type="text" value={username} autoComplete placeholder="UserName" onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button type="submit" className="button5" onClick={authenticate}>
              LOGIN
            </button>
            <small>
              Need an Account? <Link to="/register" className="aa"> Register</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}
