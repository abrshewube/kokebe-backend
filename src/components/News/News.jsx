// News.jsx

import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../../services/newService';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNewsData();
      setNews(newsData);
      setFilteredNews(newsData);
    };

    fetchData();
  }, []);

  const itemsPerPage = 4;

  const renderNews = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredNews.slice(startIndex, endIndex).map(item => (
      <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-sm font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-2">{truncateDescription(item.description)}</p>
          <p className="text-gray-500 text-sm mb-2">Created at: {formatDate(item.createdAt)}</p>
          
<Link to={`/news/${item._id}`} className="text-blue-500 hover:underline">Read More</Link>
        </div>
      </div>
    ));
  };

  const truncateDescription = (description) => {
    const lines = description.split('\n');
    const truncated = lines.slice(0, 1).join('\n');
    return truncated + (lines.length > 2 ? '...' : '');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString(); // Format date as desired
  };

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${currentPage === i && 'bg-blue-600'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filtered = news.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredNews(filtered);
    setCurrentPage(1); // Reset pagination to first page after search
  };

  const renderLatestPosts = () => {
    const latestPosts = news.slice(0, 8); // Get the latest 5 news items
    return latestPosts.map(item => (
      <div key={item._id} className="bg-white rounded-lg shadow-md mb-2 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-24 object-cover" />
        <div className="p-2">
          <h2 className="text-sm font-bold mb-1">{item.title}</h2>
          <p className="text-gray-500 text-xs">Created at: {formatDate(item.createdAt)}</p>
                    
         <Link to={`/news/${item._id}`} className="text-blue-500 hover:underline">Read More</Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-12 px-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Kokebe Tsibah School News</h1>
        <p className="text-lg">Stay up to date with the latest news about your school.</p>
      </div>
      
      {/* Search Input */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-400 rounded-md py-2 px-4 mr-4 focus:outline-none"
        />
        <FaSearch className="text-gray-500" />
      </div>
      
      {/* Latest News */}
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2">
          {renderNews()}
          <div className="flex justify-center mt-8">
            {renderPagination()}
          </div>
        </div>
        
        {/* Latest Posts */}
        <div className="md:ml-4">
          <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
          {renderLatestPosts()}
        </div>
      </div>
    </div>
  );
};

export default News;
