import React, { useState } from 'react'
import './signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../redux/service/adminSlice';



const Signup = () => {

    const [formData, setFormData] = useState({email: "", password: "", username: ''})
    const [fun, { isLoading, isError, error, data }] = useSignupMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fun(formData).unwrap();
        }
        catch(err) {
            console.log(err)
        }
    }


  return (
    <>
        
        <div className='login-page'>
        <div  className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
          }}
        />
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
        <button type="submit">{isLoading ? "Loading..." : "Sign up"}</button>
        
      </form>
      <span className='error'>{error ? error?.data?.message : ""}</span>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
          </div>

        
    </>
  )
}

export default Signup
