import React, { useEffect, useState } from 'react';
import { getAllClubs, assignClubLeader } from '../../../services/clubService';
import { FaUserAlt, FaUsers, FaArrowRight } from 'react-icons/fa';

const AssignClubLeader = () => {
  const [clubs, setClubs] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubsData = await getAllClubs();
        setClubs(clubsData);

        // Fetch users directly within the component
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/users/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseMessage = await assignClubLeader(selectedClub, selectedUser);
      setMessage(responseMessage);
    } catch (error) {
      console.error('Error assigning club leader:', error);
      setMessage('Failed to assign club leader');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10 mb-8">
      <h1 className="text-2xl font-bold text-center mb-4">Assign Club Leader</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <FaUsers className="text-gray-600" />
          <label className="block text-gray-700">Club:</label>
          <select
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a club</option>
            {clubs.map((club) => (
              <option key={club._id} value={club._id}>{club.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <FaUserAlt className="text-gray-600" />
          <label className="block text-gray-700">User:</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>{user.username}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Assign Leader <FaArrowRight className="ml-2" />
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default AssignClubLeader;
