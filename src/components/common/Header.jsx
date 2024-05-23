import React, { useState, useEffect } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaBars, FaTimes, FaHome, FaNewspaper, FaInfo, FaUsers, FaUser, FaBook, FaUserShield } from 'react-icons/fa';

function Header() {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const logout = () => {
    setIsConfirmationOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const token = localStorage.getItem("token");

  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  };

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken) {
        if (decodedToken.profilePicture) {
          setUserPhoto(decodedToken.profilePicture);
        }
        if (decodedToken.role) {
          setUserRole(decodedToken.role);
        }
      }
    }
  }, [token]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsNavOpen(false);
  };

  return (
    <header className="bg-white shadow-lg py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EknRZ1NhPDFU5GCEOiH-ABJnZJPm8TgkbB98HNHiMA&s" alt="Logo" className="w-16 h-16 mr-2" />
          <span className="text-lg font-bold text-gray-800">Kokebe Tsibah</span>
        </a>
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-gray-800 focus:outline-none">
            {isNavOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <ul className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 z-50 md:relative md:flex md:flex-row md:space-x-6 md:space-y-0 ${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href="/" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/' && 'text-blue-600'}`} onClick={() => handleLinkClick('/')}><FaHome className="inline-block mr-1" /> Home</a></li>
          <li><a href="/news" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/news' && 'text-blue-600'}`} onClick={() => handleLinkClick('/news')}><FaNewspaper className="inline-block mr-1" /> News</a></li>
          <li><a href="/about" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/about' && 'text-blue-600'}`} onClick={() => handleLinkClick('/about')}><FaInfo className="inline-block mr-1" /> About</a></li>
          <li><a href="/clubs" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/clubs' && 'text-blue-600'}`} onClick={() => handleLinkClick('/clubs')}><FaUsers className="inline-block mr-1" /> Clubs</a></li>
          {token && <li><a href="/user-page" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/user-page' && 'text-blue-600'}`} onClick={() => handleLinkClick('/user-page')}><FaUser className="inline-block mr-1" /> Dashboard</a></li>}
          {token && <li><a href="/resources" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/resources' && 'text-blue-600'}`} onClick={() => handleLinkClick('/resources')}><FaBook className="inline-block mr-1" /> Resources</a></li>}
          {token && userRole === 'admin' && <li><a href="/admin" className={`text-lg font-semibold hover:text-gray-500 ${activeLink === '/admin' && 'text-blue-600'}`} onClick={() => handleLinkClick('/admin')}><FaUserShield className="inline-block mr-1" /> Admin</a></li>}
        </ul>
        {token ? (
          <div className="flex items-center">
            <img src={userPhoto} alt="User" className="h-10 w-10 rounded-full mr-2" />
            <span className="text-lg font-semibold text-gray-800 cursor-pointer relative">
              <span>{/* Insert username here */}</span>
              <ul className="absolute hidden bg-white shadow-md rounded-md mt-2 py-1 w-24 right-0">
                <li><button onClick={logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button></li>
              </ul>
            </span>
            <FaSignOutAlt onClick={logout} className="text-gray-800 hover:text-gray-500 ml-2 cursor-pointer" />
          </div>
        ) : (
          <a href="/auth/login" className="text-gray-800 hover:text-gray-500 ml-6 flex items-center">
            <FaSignInAlt className="text-3xl" />
            <span className="text-lg font-semibold text-gray-800 cursor-pointer ml-2">Login</span>
          </a>
        )}
      </div>
      {isConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
          <div className="bg-white rounded-md p-8">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to logout?</h2>
            <div className="flex justify-end">
              <button onClick={closeConfirmation} className="text-gray-800 hover:text-gray-500 font-semibold mr-4">Cancel</button>
              <button onClick={confirmLogout} className="text-red-600 hover:text-red-400 font-semibold">Logout</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
