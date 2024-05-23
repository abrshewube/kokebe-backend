import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaTrash, FaEdit } from 'react-icons/fa';
import BASE_URL from '../../../util/server';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const limit = 10;

  useEffect(() => {
    fetchUserList();
  }, [currentPage]);

  const fetchUserList = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${BASE_URL}/users/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      setErrorMessage('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const updateUserRole = async (userId, newRole) => {
    try {
      const updatedUsers = users.map(user => {
        if (user._id === userId) {
          return { ...user, role: newRole };
        }
        return user;
      });
      setUsers(updatedUsers);

      const token = localStorage.getItem('token');
      await axios.put(
        `${BASE_URL}/users/${userId}/update-role`,
        { role: newRole },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSuccessMessage('User role updated successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Failed to update user role:', error.message);
      setErrorMessage('Failed to update user role');
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${BASE_URL}/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccessMessage('User deleted successfully');
        setTimeout(() => setSuccessMessage(''), 3000);
        fetchUserList();
      } catch (error) {
        console.error('Failed to delete user:', error.message);
        setErrorMessage('Failed to delete user');
      }
    }
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(users.length / limit);
    return (
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`mx-1 px-4 py-2 font-bold rounded ${currentPage === i + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-center mb-6">User Management</h1>

      <button onClick={() => window.history.back()} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4">
        <FaArrowLeft className="inline-block mr-2" />
        Back
      </button>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table className="table-auto w-full mx-8">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Full Name</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.slice((currentPage - 1) * limit, currentPage * limit).map((user, index) => (
                <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border px-4 py-2">{(currentPage - 1) * limit + index + 1}</td>
                  <td className="border px-4 py-2">{user.fullName}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={user.role}
                      onChange={(e) => updateUserRole(user._id, e.target.value)} // Pass newRole directly
                      className="p-2 rounded"
                    >
                      <option value="student">Student</option>
                      <option value="admin">Admin</option>
                      <option value="registral_role">Registral Role</option>
                      <option value="club_admin">Club Admin</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <FaEdit className="inline-block mr-2" />
                      Update Role
                    </button>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    >
                      <FaTrash className="inline-block mr-2" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {renderPagination()}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
