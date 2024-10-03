import React, { useState } from 'react';
import './signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSigninMutation } from '../../redux/service/adminSlice'


const Signin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({email: "", password: ""})
    const [fun, { isLoading, isError, error, data }] = useSigninMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fun(formData).unwrap()
            console.log(res)
            navigate('/home')
        }
        catch(err) {
            console.log(err)
        }
    }

  return (
    <div>
      <div className="login-page">
        <div className="auth-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, [e.target.name]: e.target.value})
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                setFormData({...formData, [e.target.name]: e.target.value})
              }}
            />
            {/* <button type="submit">Sign Up</button> */}
            <button type="submit">{isLoading ? "Loading..." : "Sign in"}</button>
          </form>
          <span className='error'>{error ? error?.data?.message : ""}</span>
          <p>
            Already have an account? <Link to="/signup">Signup here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
