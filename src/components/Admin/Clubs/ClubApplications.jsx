import React, { useState, useEffect } from 'react';
import { getClubApplications, processClubApplication } from '../../../services/clubService';

const ClubApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClubIdByAdminId = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/clubs/admin-club-id', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      return data.clubId;
    } catch (error) {
      console.error('Error fetching club ID by admin ID:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const clubId = await fetchClubIdByAdminId();
        if (!clubId) {
          throw new Error('Club ID not found for this admin.');
        }

        const applicationsData = await getClubApplications(clubId);
        setApplications(applicationsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching club applications:', error.message);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleProcessApplication = async (applicationId, status) => {
    try {
      await processClubApplication(applicationId, status);
      setApplications(applications.map(app => app._id === applicationId ? { ...app, status } : app));
    } catch (error) {
      console.error('Error processing club application:', error.message);
    }
  };

  return (
    <div>
      <h2>Club Applications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {applications.map(application => (
            <li key={application._id}>
              <div>
                <strong>Club:</strong> {application.clubName}
              </div>
              <div>
                <strong>Status:</strong> {application.status}
              </div>
              <div>
                <button onClick={() => handleProcessApplication(application._id, 'approved')}>Approve</button>
                <button onClick={() => handleProcessApplication(application._id, 'denied')}>Deny</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClubApplications;
