// AdminDashboard.jsx
import React from 'react';
import { FaUserPlus, FaNewspaper, FaClipboardList, FaUserShield, FaWrench,FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
  const adminResources = [
    {
      title: 'Register User',
      description: 'Register new students to the platform.',
      icon: <FaUserPlus className="text-3xl text-blue-500" />,
      link: 'admin/regsiter-user',
    },
    {
      title: 'Create News',
      description: 'Publish new updates and news articles.',
      icon: <FaNewspaper className="text-3xl text-red-500" />,
      link: '/admin/create-news',
    },
    {
      title: 'Delete News', // New card for deleting news
      description: 'Delete existing news articles.',
      // eslint-disable-next-line react/jsx-no-undef
      icon: <FaTrash className="text-3xl text-gray-500" />,
      link: '/admin/delete-news',
    },
    {
      title: 'Club Applications',
      description: 'View and manage club applications.',
      icon: <FaClipboardList className="text-3xl text-green-500" />,
      link: '/admin/club-applications',
    },
    {
      title: 'Assign Club Leader',
      description: 'Assign leaders to various clubs.',
      icon: <FaUserShield className="text-3xl text-yellow-500" />,
      link: '/admin/assign-leader',
    },
    {
      title: 'Create Resource',
      description: 'Add new learning resources.',
      icon: <FaWrench className="text-3xl text-purple-500" />,
      link: '/admin/resources',
    },
    {
      title: 'Create Clubs',
      description: 'Set up new clubs.',
      icon: <FaWrench className="text-3xl text-purple-500" />,
      link: '/admin/clubs',
    },
    {
      title: 'Mange Users',
      description: 'manage user roles.',
      icon: <FaWrench className="text-3xl text-purple-500" />,
      link: '/admin/user-management',
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {adminResources.map((resource) => (
          <a href={resource.link} key={resource.title} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-200">
            <div className="mb-4">
              {resource.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 text-center">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
