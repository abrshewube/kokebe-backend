import React, { useState } from 'react';
import { createClub } from '../../../services/clubService';
import { FaSave } from 'react-icons/fa';

const CreateClubs = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    establishedDate: '',
    location: '',
    website: '',
    email: '',
    contactNumber: '',
    events: '',
    facebook: '',
    twitter: '',
    instagram: '',
    logoUrl: '',
    coverPhotoUrl: '',
    missionStatement: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseMessage = await createClub(formData);
      setMessage(responseMessage);
      setError('');
      setFormData({
        name: '',
        description: '',
        category: '',
        establishedDate: '',
        location: '',
        website: '',
        email: '',
        contactNumber: '',
        events: '',
        facebook: '',
        twitter: '',
        instagram: '',
        logoUrl: '',
        coverPhotoUrl: '',
        missionStatement: '',
      });
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 mt-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Club</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Club Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div >
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="h-8 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="establishedDate" className="block text-sm font-medium text-gray-700">Established Date</label>
            <input
              type="date"
              id="establishedDate"
              name="establishedDate"
              value={formData.establishedDate}
              onChange={handleChange}
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 h-8  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="events" className="block text-sm font-medium text-gray-700">Events</label>
            <input
              type="text"
              id="events"
              name="events"
              value={formData.events}
              onChange={handleChange}
              className="mt-1 h-16 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook</label>
            <input
              type="url"
              id="facebook"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">Twitter</label>
            <input
              type="url"
              id="twitter"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="mt-1 block h-8 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram</label>
            <input
              type="url"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">Logo URL</label>
            <input
              type="url"
              id="logoUrl"
              name="logoUrl"
              value={formData.logoUrl}
              onChange={handleChange}
              className="mt-1  h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="coverPhotoUrl" className="block text-sm font-medium text-gray-700">Cover Photo URL</label>
            <input
              type="url"
              id="coverPhotoUrl"
              name="coverPhotoUrl"
              value={formData.coverPhotoUrl}
              onChange={handleChange}
              className="mt-1 h-8  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="missionStatement" className="block text-sm font-medium text-gray-700">Mission Statement</label>
            <textarea
              id="missionStatement"
              name="missionStatement"
              value={formData.missionStatement}
              onChange={handleChange}
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaSave className="mr-2" />
            Create Club
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default CreateClubs;
