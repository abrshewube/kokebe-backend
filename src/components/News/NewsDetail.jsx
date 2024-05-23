import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchNewsById, fetchNewsData } from '../../services/newService';
import { FaArrowLeft, FaSearch } from 'react-icons/fa'; // Importing Font Awesome icons
import stringSimilarity from 'string-similarity';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNewsById(id);
        console.log('Fetched news data:', data);
        setNewsItem(data);
        setLoading(false);

        const allPosts = await fetchNewsData();

        const related = allPosts.news.filter(post => {
          const similarityThreshold = 0.5;
          const similarity = stringSimilarity.compareTwoStrings(post.title.toLowerCase(), data.title.toLowerCase());
          return similarity >= similarityThreshold && post.id !== data.id;
        });

        setRelatedPosts(related);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!newsItem) {
    return <div>No news found.</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString(); // Format date as desired
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Back Button */}
      <Link to="/news" className="flex items-center text-gray-600 mb-4">
        <FaArrowLeft className="mr-2" /> Back
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={newsItem.image} alt={newsItem.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-2"></span>{newsItem.title}
          </h2>
          <p className="text-gray-700 mb-4"><span className="mr-2"></span>{newsItem.description}</p>
          <p className="text-gray-500"><span className="mr-2"></span>Created at: {formatDate(newsItem.createdAt)}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Related Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {relatedPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">{post.description}</p>
              <Link to={`/news/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetails;
