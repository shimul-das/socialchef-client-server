
import React, { useContext, useState } from 'react'
import "./signup.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const [error, setError] = useState('');
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.c_password.value;
    console.log(email, password, confirm_password);
    setError('');
    // Validation
    if (!email.trim() || !password.trim()) {
      setError('A user cannot submit empty email and password fields');
      return;
    }
    else if (password !== confirm_password) {
      setError('Your Password did not match')
      return
    }
    else if (password.length < 6) {
      setError('Password must be six characters or longer');
      return
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserData (result.user,name,photo);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
    navigate(from, { replace: true });
  }
  const updateUserData = (user,name,photo)=>{
    updateProfile(user,{
        displayName:name,
        photoURL:photo,
    })
    .then(()=>{
        console.log('user name updated')
    })
    .catch(error=>{
        seterror(error.message)
    })
}
  return (
    <div className='form-signup-container'>
      <h2 className='form-title'>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input type="text" name='name' required />
        </div>
        <div className="form-control">
          <label htmlFor="">Photo Url</label>
          <input type="text" name='photo' required />
        </div>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name='email'  />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name='password'  />
        </div>
        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name='c_password' required />
        </div>
        <div className="form-control">
          <input className='btn-submit' type="submit" value="Sign Up" name='submit' required />
        </div>
        <p className='alternative'>Already have an account ? <span className='alternative-Link'><Link to="/login">Login</Link></span></p>
        <p className='text-error'>{error}</p>
      </form>
    </div>
  )
}

export default SignUp;

