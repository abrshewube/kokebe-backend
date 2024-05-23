import React, { useState } from 'react';
import { createNews } from '../../../services/newService';
import { FiUpload } from 'react-icons/fi';

const CreateNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createNews(title, description, image);
      setSuccess('News created successfully');
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      setError('Failed to create news');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-lg py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Create News</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none" rows="4" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Image:</label>
            <div className="flex items-center">
              <label htmlFor="imageUpload" className="flex items-center justify-center w-32 h-12 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300">
                <FiUpload className="mr-2" />
                Upload Image
              </label>
              <input id="imageUpload" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="hidden" required />
              {image && <span className="ml-4">{image.name}</span>}
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300">
            {loading ? 'Creating...' : 'Create News'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNews;
