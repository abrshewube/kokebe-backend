// Dashboard.jsx
import React from 'react';
import { FaBook, FaVideo, FaBlog, FaTools, FaClipboardCheck, FaCalendar,FaUserGraduate ,FaInfoCircle  } from 'react-icons/fa';

const Dashboard = () => {
  const resources = [
    {
      title: 'Books',
      description: 'Explore a variety of books to enhance your knowledge.',
      icon: <FaBook className="text-3xl text-blue-500" />,
      link: '/entertainment/books',
    },
    {
      title: 'Videos',
      description: 'Watch educational videos on various topics.',
      icon: <FaVideo className="text-3xl text-red-500" />,
      link: '/entertainment/videos',
    },
    {
      title: 'Blogs',
      description: 'Read insightful blogs written by experts.',
      icon: <FaBlog className="text-3xl text-green-500" />,
      link: '/entertainment/blogs',
    },
    {
      title: 'Resources',
      description: 'Access a wide range of learning resources.',
      icon: <FaTools className="text-3xl text-yellow-500" />,
      link: '/resources',
    },
    {
      title: 'Application Status',
      description: 'Check the status of your club applications.',
      icon: <FaClipboardCheck className="text-3xl text-purple-500" />,
      link: '/clubs/status',
    },
    {
      title: 'School Events',
      description: 'Check new events avaliable!.',
      icon: <FaCalendar className="text-3xl text-purple-500" />,
      link: '/events',
    },
    {
      title: 'Regsiter for School',
      description: 'Regsiter for School is opened!.',
      icon: <FaUserGraduate className="text-3xl text-purple-500" />, // Replacing the icon
      link: '/school/regsitration',
    },

    {
      title: 'Check Registration Status',
      description: 'Check the status of your registration here.',
      icon: <FaInfoCircle className="text-3xl text-blue-500" />, // Replace with your desired icon
      link: '/registration/status',
    },
    

{
  title: 'Exam Management',
  description: 'Manage your exams and view results.',
  icon: <FaBook className="text-3xl text-green-500" />,
  link: '/student/quiz',
}

    
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
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

export default Dashboard;
