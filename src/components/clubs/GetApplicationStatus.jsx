import React, { useState, useEffect } from 'react';
import { getUserApplicationss } from '../../services/clubService';

const GetApplicationStatus = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const userApplications = await getUserApplicationss();
        setApplications(userApplications);
        console.log(userApplications)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user applications:', error.message);
        // Handle error here, such as displaying an error message to the user
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Application Status</h2>
      {loading ? (
        <p>Loading...</p>
      ) : applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Club</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(application => (
              <tr key={application.id}>
                <td className="border px-4 py-2">{application.club.name}</td>
                <td className="border px-4 py-2">{application.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetApplicationStatus;
