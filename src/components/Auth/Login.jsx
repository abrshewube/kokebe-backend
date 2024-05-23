import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import { FaUser, FaLock, FaQuestionCircle, FaSchool } from 'react-icons/fa'; // Importing icons from React Icons

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/'); // Redirect to dashboard upon successful login
        // Reload the page to update the UI (if needed)
    window.location.reload();
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container flex justify-center items-center h-screen bg-gray-200">
    <div className="login-card bg-white rounded-lg shadow-md p-8 max-w-md w-full h-1000">
      {/* School icon */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <FaSchool className="text-blue-500 text-7xl mr-8" />
</div>


      <div className="flex items-center justify-center mb-4">
       
      <h2 className="text-2xl font-bold" style={{ textShadow: '1px 1px 3px #333', filter: 'drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.5))' }}>
    Login to your Kokebe Tsibah School Account
</h2>

      </div>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div className="input-group flex items-center border border-gray-400 rounded-md py-2">
          <FaUser className="text-gray-500 mr-2" />
          <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="flex-1 outline-none px-2 py-1" />
        </div>
        {/* Password input */}
        <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mt-4">
          <FaLock className="text-gray-500 mr-2" />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="flex-1 outline-none px-2 py-1" />
        </div>
        {/* Forgot Password link */}
        <div className="flex justify-end mt-4">
          <a href="#" className="text-blue-500 flex items-center"><FaQuestionCircle className="text-gray-500 mr-2" />Forgot Password?</a>
        </div>
        {/* Login button */}
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300">Login</button>
        </div>
        {/* Error message */}
        {error && <div className="error-message text-red-500 mt-4">{error}</div>}
        {/* Already have an account link */}
        <div className="text-center mt-4">
          <span>Don't have an account? <a href="#" className="text-blue-500">Regsiter</a></span>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;
