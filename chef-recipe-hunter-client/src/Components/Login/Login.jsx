
import React, { useContext, useState } from 'react';
import "./login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const { signInuser1, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError('');
    //validation
    if (!email.trim() || !password.trim()) {
      setError('A user cannot submit empty email and password fields');
      return;
    }
    signInuser1(email,password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser.displayName);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
        console.log(error)
      });
  };

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name='email' />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type={show ? "text" : "password"} name='password' />
          <p onClick={() => setShow(!show)}><small>
            {
              show ? <span>Hide password</span> : <span>Show password</span>
            }
          </small></p>
        </div>

        <div className="form-control">
          <input className='btn-submit' type="submit" value="Login" name='submit' required />
        </div>
        <p className='alternative'>Are you new to Social Chef ? <span className='alternative-Link'><Link to="/signup">Create a New Account</Link></span></p>
        <p className='text-error'>{error}</p>
      </form>

      <div className="form-control social-login">
        <button className='btn-social-login bg-secondary me-1 text-white' onClick={handleSignInWithGoogle}>
          <FaGoogle className='btn-icon me-2 text-warning' />
          <span>Login with Google</span>
        </button>
        <button className='btn-social-login bg-success text-white' onClick={handleSignInWithGithub}>
          <FaGithub className='btn-icon me-2 text-warning' />
          <span>Login with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
