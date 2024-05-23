import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getClubById } from '../../services/clubService';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ClubDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        const clubData = await getClubById(id);
        setClub(clubData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching club details:', error);
        setLoading(false);
      }
    };
    fetchClubDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!club) {
    return <div>Club not found.</div>;
  }

  const handleApplyClick = () => {
    // Navigate to '/clubs/apply' with club ID as state
    navigate(`/clubs/apply`, { state: { clubId: id } });
   console.log(id)
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={club.coverPhotoUrl} alt={club.name} className="w-full h-64 object-cover mb-6 rounded-md" />
        <h2 className="text-3xl font-bold mb-4">{club.name}</h2>
        <div className="flex items-center mb-2 text-sm">
          <FaUser className="text-gray-500" />
          <p className="text-gray-700 ml-1">{club.leader ? club.leader.username : 'Unknown'}</p>
        </div>
        <div className="flex items-center mb-2 text-sm">
          <FaCalendarAlt className="text-gray-500" />
          <p className="text-gray-700 ml-1">Established: {new Date(club.establishedDate).toDateString()}</p>
        </div>
        <div className="flex items-center mb-2 text-sm">
          <FaMapMarkerAlt className="text-gray-500" />
          <p className="text-gray-700 ml-1">Location: {club.location}</p>
        </div>
        <div className="flex items-center mb-2 text-sm">
          <FaEnvelope className="text-gray-500" />
          <p className="text-gray-700 ml-1">Contact Email: {club.email}</p>
        </div>
        <div className="flex items-center mb-2 text-sm">
          <FaPhone className="text-gray-500" />
          <p className="text-gray-700 ml-1">Contact Number: {club.contactNumber}</p>
        </div>
        <div className="mt-4 text-sm">
          <h3 className="text-lg font-semibold mb-2">Mission Statement:</h3>
          <p className="text-gray-700">{club.missionStatement}</p>
        </div>
        <div className="mt-4">
          {/* Call handleApplyClick when Apply button is clicked */}
          <button onClick={handleApplyClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
