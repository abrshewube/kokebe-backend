import React, { useState } from 'react';
import BASE_URL from '../../util/server';

const RegistrationForm = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Get token from localStorage
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${BASE_URL}/registrations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        setSuccessMessage('Registration submitted successfully');
        setTimeout(() => {
          window.location.href = '/school/status';
        }, 2000);
      } else {
        console.error('Failed to submit registration:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting registration:', error.message);
    }
  };

  const handleViewStatus = async (event) => {
    event.preventDefault();

    // Get token from localStorage
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`${BASE_URL}/registrations/status`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle response data as needed
      } else {
        console.error('Failed to fetch registration status:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching registration status:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h2 className="text-center text-2xl font-bold mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4" id="registrationForm">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input id="fullName" type="text" name="fullName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-gray-700 font-bold mb-2">Grade</label>
            <select id="grade" name="grade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
              <option value="" disabled>Select Grade</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="lastYearSection" className="block text-gray-700 font-bold mb-2">Last Year Section</label>
            <input id="lastYearSection" type="text" name="lastYearSection" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastYearGradeResult" className="block text-gray-700 font-bold mb-2">Last Year Grade Result</label>
            <input id="lastYearGradeResult" type="file" name="lastYearGradeResult" accept=".pdf" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            <a href="/school/registration" onClick={handleViewStatus} className="text-blue-500 hover:underline">View Registration Status</a>
          </div>
        </form>
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;
