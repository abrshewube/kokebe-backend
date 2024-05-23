import React, { useState } from 'react';
import { fetchResourcesByCategory } from '../../services/resources';
import { FaDownload, FaSpinner } from 'react-icons/fa'; // Importing additional icons

const Resources = () => {
  const [category, setCategory] = useState('');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchResources = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token || !category) return;

    const fetchedResources = await fetchResourcesByCategory(category, token);
    setResources(fetchedResources);
    console.log(fetchedResources)
    setLoading(false);
  };

 const handleDownload = (downloadLink) => {
  const anchor = document.createElement('a');
  anchor.href = downloadLink;
  anchor.download = '';
  anchor.target = '_blank'; // Open in new tab
  anchor.click();
};


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Resources</h2>
      {/* Category Select */}
      <div className="mb-4 ">
        <label htmlFor="category" className="block text-lg font-semibold text-gray-800 mb-2">Select Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200">
          <option value="">Select Category</option>
          <option value="text book">Textbook</option>
          <option value="teacher guide">Teacher Guide</option>
          <option value="teacher notes">Teacher Notes</option>
          <option value="worksheets">Worksheets</option>
          <option value="exams">Exams</option>
        </select>
      </div>
      {/* Fetch Button */}
      <button onClick={handleFetchResources} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 flex items-center justify-center">
        {loading ? <FaSpinner className="animate-spin mr-2" /> : null} Fetch Resources
      </button>
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : resources.length === 0 ? (
          <p className="text-gray-600">No resources found for this category.</p>
        ) : (
          resources.map(resource => (
            <div key={resource.id} className="bg-white shadow-md p-4  border border-blue-300 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
              </div>
              <button className="text-blue-500 hover:underline flex items-center bg-transparent border border-blue-500 py-1 px-3 rounded-lg" onClick={() => handleDownload(resource.cloudinaryUrl)}>
  <FaDownload className="mr-1" /> Download
</button>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;
