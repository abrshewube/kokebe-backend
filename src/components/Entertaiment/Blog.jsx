import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcademicBlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetchAcademicBlogs();
  }, []);

  const fetchAcademicBlogs = async () => {
    try {
      const response = await axios.get('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=10');
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, 'text/xml');
      const entries = Array.from(xmlDoc.getElementsByTagName('entry')).map((entry) => ({
        id: entry.getElementsByTagName('id')[0].textContent,
        title: entry.getElementsByTagName('title')[0].textContent,
        summary: entry.getElementsByTagName('summary')[0].textContent,
        link: entry.getElementsByTagName('link')[0].getAttribute('href'),
      }));
      setArticles(entries);
      setFilteredArticles(entries);
    } catch (error) {
      console.error('Error fetching academic blogs:', error);
    }
  };

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchTerm(keyword);
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(keyword) || article.summary.toLowerCase().includes(keyword)
    );
    setFilteredArticles(filtered);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  return (
    <div>
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Academic Blogs</h1>
          <p className="text-lg">Discover scientific articles and papers</p>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
            className="mt-8 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-700 mb-4">{truncateText(article.summary, 150)}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicBlogs;
