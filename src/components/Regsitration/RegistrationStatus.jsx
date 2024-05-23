import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaFileAlt, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'; // Import React Icons
import BASE_URL from '../../util/server';

const RegistrationStatus = () => {
  const [registrationData, setRegistrationData] = useState(null);
  const [paymentPending, setPaymentPending] = useState(false);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem('token');

    // Make API request to view registration status using Axios
    axios.get(`${BASE_URL}/registrations/status`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      const data = response.data;
      if (data.registration) {
        // If registration status is available, set the registration data
        setRegistrationData(data.registration);
        if (data.registration.registrationStatus === 'Pending') {
          // If registration status is pending, set paymentPending to true
          setPaymentPending(true);
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6 space-y-4">
        <h2 className="text-center text-3xl font-bold text-purple-700 mb-6">Registration Status</h2>
        <div className="space-y-2">
          {registrationData ? (
            <>
              <p><FaUser className="inline-block mr-2 text-purple-500" /> <strong>Full Name:</strong> {registrationData.fullName}</p>
              <p><FaGraduationCap className="inline-block mr-2 text-purple-500" /> <strong>Grade:</strong> {registrationData.grade}</p>
              <p><FaUser className="inline-block mr-2 text-purple-500" /> <strong>Last Year Section:</strong> {registrationData.lastYearSection}</p>
              <p><FaFileAlt className="inline-block mr-2 text-purple-500" /> <strong>Last Year Grade Result:</strong> <a href={registrationData.lastYearGradeResult} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View</a></p>
              <p><FaExclamationTriangle className="inline-block mr-2 text-red-500" /> <strong>Registration Status:</strong> {registrationData.registrationStatus}</p>
            </>
          ) : (
            <p className="text-red-500 font-bold">No registration found</p>
          )}
        </div>
        {paymentPending && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md">
            <p className="flex items-center">
              <FaExclamationTriangle className="mr-2 text-red-500" />
              Your registration is pending. Please pay the registration fee at the school office.
            </p>
          </div>
        )}
        {/* Back to Home Button */}
        <Link to="/index.html" className="block w-full text-center text-white bg-purple-500 hover:bg-purple-600 py-2 rounded-md mt-6 transition duration-300">
          <FaArrowLeft className="inline-block mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RegistrationStatus;
