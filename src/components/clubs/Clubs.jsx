import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getAllClubs } from '../../services/clubService';
import { Link } from 'react-router-dom';
const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClubs, setFilteredClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clubsData = await getAllClubs();
        setClubs(clubsData);
        setFilteredClubs(clubsData);
        console.log(clubsData)
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };
    fetchData();
  }, []);

  const itemsPerPage = 6;

  const renderClubs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredClubs.slice(startIndex, endIndex).map(club => (
      <div key={club._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
        <img src={club.coverPhotoUrl} alt={club.name} className="w-full h-40 object-cover mb-4 rounded-md" />
        <h2 className="text-2xl font-bold mb-2">{club.name}</h2>
        <p className="text-gray-700 text-2xl mb-2">{club.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{club.leader ? `Leader: ${club.leader.username}` : 'Leader: Unknown'}</p>
          <Link to={`/clubs/${club._id}`} className="bg-blue-500 text-white px-4 py-1 rounded-full inline-block mt-4">Read More</Link>
        </div>
      </div>
    ));
  };
  

  const totalPages = Math.ceil(filteredClubs.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filtered = clubs.filter(club =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClubs(filtered);
    setCurrentPage(1); // Reset pagination to first page after search
  };

  return (
    <div className="container mx-auto py-8 px-4">
         {/* Hero Section */}
       <div className="bg-blue-500 text-white py-12 px-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Kokebe Tsibah School Clubs</h1>
        <p className="text-lg">Stay up to date with the latest Clubs about your school.</p>
      </div>
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search clubs by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-400 rounded-md py-2 px-4 mr-4 focus:outline-none"
        />
        <FaSearch className="text-gray-500" />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {renderClubs()}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${currentPage === index + 1 && 'bg-blue-600'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clubs;
