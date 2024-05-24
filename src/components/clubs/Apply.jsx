import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { applyToJoinClub } from '../../services/clubService';

const ApplyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [contribution, setContribution] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State to hold success message
  const clubId = location.state.clubId;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const authToken = localStorage.getItem('token');
      if (!authToken) {
        navigate('/login');
        return;
      }
      
      const response = await fetch('https://kokebe-tisbah-backend-2.onrender.com/api/users/getUserId', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to retrieve user ID');
      }
      const { userId } = await response.json();
  
      const responseMessage = await applyToJoinClub(clubId, userId, reason, contribution);
      setMessage(responseMessage);
      setSuccessMessage('Application submitted successfully'); // Set success message
      setLoading(false);
      navigate(`/clubs/${clubId}`);
    } catch (error) {
      setMessage('Error applying to join club.');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Apply to Join the Club</h1>
      <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Back</button>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8 mt-8">
        <div className="mb-4">
          <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">Reason for Joining:</label>
          <textarea
            id="reason"
            name="reason"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="Enter your reason for joining the club"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="contribution" className="block text-gray-700 text-sm font-bold mb-2">Contribution:</label>
          <textarea
            id="contribution"
            name="contribution"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
            placeholder="Enter how you can contribute to the club"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
            {loading ? 'Submitting...' : 'Apply'}
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-gray-700 text-center">{message}</p>}
      {successMessage && <p className="mt-4 text-green-500 text-center">{successMessage}</p>} {/* Display success message */}
    </div>
  );
};

export default ApplyPage;
