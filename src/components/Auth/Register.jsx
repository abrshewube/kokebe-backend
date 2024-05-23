import React, { useState } from 'react';
import { FaUser, FaLock, FaGraduationCap, FaImage } from 'react-icons/fa';
import { register } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    grade: '',
    profilePicture: null,
    schoolIdPhoto: null,
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (step === 1) {
        setStep(2); // Proceed to the next step
      } else if (step === 2) {
        setStep(3); // Proceed to the next step
      } else {
        const form = new FormData();
        for (const key in formData) {
          form.append(key, formData[key]);
        }
        await register(form);
        // Show modal popup for approval process
        // Navigate to news or clubs page
        navigate('/news');
      }
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className="registration-container flex justify-center items-center h-screen bg-gray-200">
      <div className="registration-card bg-white rounded-lg shadow-md p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Register to Kokebe Tsibah School</h2>
        {step === 1 && (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Step 1 */}
            <div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <FaLock className="text-gray-500 mr-2" />
                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <FaLock className="text-gray-500 mr-2" />
                <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
            </div>
            {/* Error message */}
            {error && <div className="error-message text-red-500 mt-4">{error}</div>}
            {/* Next button */}
            <div className="flex justify-center mt-6">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300">Next</button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Step 2 */}
            <div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <FaGraduationCap className="text-gray-500 mr-2" />
                <select name="grade" value={formData.grade} onChange={handleInputChange} required className="flex-1 outline-none px-4 py-2">
                  <option value="" disabled>Select Grade</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <label className="text-gray-500 mr-2">Profile Picture (JPG or PNG)</label>
                <input type="file" accept="image/jpeg, image/png" name="profilePicture" onChange={handleFileChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
              <div className="input-group flex items-center border border-gray-400 rounded-md py-2 mb-4">
                <label className="text-gray-500 mr-2">School ID Photo (JPG or PNG)</label>
                <input type="file" accept="image/jpeg, image/png" name="schoolIdPhoto" onChange={handleFileChange} required className="flex-1 outline-none px-4 py-2" />
              </div>
            </div>
            {/* Error message */}
            {error && <div className="error-message text-red-500 mt-4">{error}</div>}
            {/* Next button */}
            <div className="flex justify-between mt-6">
              <button type="button" className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all duration-300" onClick={() => setStep(1)}>Edit</button>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300">Next</button>
            </div>
          </form>
        )}
        {step === 3 && (
          <div>
          {/* Step 3 */}
          <h2 className="text-xl font-bold mb-4 text-center">Confirm Details</h2>
          {/* Display user input for confirmation */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Full Name:</h3>
            <p>{formData.fullName}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Email:</h3>
            <p>{formData.email}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Username:</h3>
            <p>{formData.username}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Grade:</h3>
            <p>{formData.grade}</p>
          </div>
          {/* Modal popup for approval */}
          <div className="flex justify-between mt-6">
            <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-all duration-300" onClick={handleSubmit}>Approve</button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all duration-300" onClick={() => setStep(2)}>Edit</button>
          </div>
        </div>
      )}
      {/* Already have an account link */}
      <div className="login-link text-center mt-4">
        <span>Already have an account? <a href="/auth/login" className="text-blue-500">Login</a></span>
      </div>
    </div>
  </div>
);
};

export default Registration;
