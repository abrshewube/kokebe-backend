import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://kokebe-tisbah-backend-2.onrender.com/api/school-news?page=${currentPage}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNews(response.data.news);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching news:', error.message);
    }
  };

  const deleteNews = async (newsId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`https://kokebe-tisbah-backend-2.onrender.com/api/school-news/${newsId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        setSuccessMessage('News article deleted successfully.');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        fetchNews();
      } else {
        setErrorMessage('Failed to delete news article.');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error deleting news article:', error.message);
      setErrorMessage('An error occurred while deleting news article.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Manage News</h1>
      {/* Success and Error Messages */}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {/* News List */}
      <ul className="grid grid-cols-1 gap-4">
        {news.map((item) => (
          <li key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <button
              onClick={() => deleteNews(item._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`mx-1 px-4 py-2 font-bold rounded ${currentPage === i + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ManageNews;
