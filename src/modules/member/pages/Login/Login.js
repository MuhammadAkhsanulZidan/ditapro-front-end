import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';
import { loginRequest } from '../../Api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      password: password.length === 0,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await loginRequest(email, password);
        login(response.data.token);
        navigate('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row auth-container min-vh-100">
        {/* Logo Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'var(--primary-color)' }}>
          <div className='border-start border-bottom border-3 p-5'><h1 className="mb-1" style={{ color: 'white' }}>DITAPRO</h1>
          <h6 className="mb-1" style={{ color: 'white' }}>TRAIN AND LEARN</h6></div>
        </div>
        {/* Login Form Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'var(--highlight-color)' }}>
          <div className="w-75">
            <h2 className="mb-4 text-center fw-bold" style={{ color: 'var(--primary-color)' }}>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <div className="invalid-feedback">Please enter a valid email address.</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <div className="invalid-feedback">Password cannot be empty.</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3" style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
                Login
              </button>
              {/* <p className="text-center">
                Don't have an account?{" "}
                <a href="/signup" className="text-decoration-none">Signup</a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
