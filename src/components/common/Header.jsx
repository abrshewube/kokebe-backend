import React, { useState, useEffect } from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // State to control the confirmation modal
  const [userPhoto, setUserPhoto] = useState(''); // State to store user photo URL

  // Function to handle logout
  const logout = () => {
    setIsConfirmationOpen(true); // Open the confirmation modal
  };

  // Function to confirm logout
  const confirmLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Reload the page to update the UI (if needed)
    window.location.reload();
  };

  // Function to close the confirmation modal
  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const token = localStorage.getItem("token");

  // Custom function to decode JWT token
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

  // Decode the token to get the user photo URL
  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.profilePicture) {
        setUserPhoto(decodedToken.profilePicture);
      }
    }
  }, [token]);

  return (
    <header className="bg-white shadow-lg py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Home Link */}
        <a href="/" className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EknRZ1NhPDFU5GCEOiH-ABJnZJPm8TgkbB98HNHiMA&s" alt="Logo" className="h-16 mr-2" />
          <span className="text-lg font-bold text-gray-800">Kokebe Tsibah</span>
        </a>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="text-lg font-semibold text-gray-800 hover:text-gray-500">Home</a></li>
          <li><a href="/news" className="text-lg font-semibold text-gray-800 hover:text-gray-500">News</a></li>
          <li><a href="/about" className="text-lg font-semibold text-gray-800 hover:text-gray-500">About</a></li>
          <li><a href="/clubs" className="text-lg font-semibold text-gray-800 hover:text-gray-500">Clubs</a></li>
          {token && <li><a href="/user-page" className="text-lg font-semibold text-gray-800 hover:text-gray-500">Dashboard</a></li>}
          {token && <li><a href="/resources" className="text-lg font-semibold text-gray-800 hover:text-gray-500">Resources</a></li>}
        </ul>
        {/* Profile */}
        {token ? (
          <div className="flex items-center">
            {/* User Photo */}
            <img src={userPhoto} alt="User" className="h-10 w-10 rounded-full mr-2" />
            <span className="text-lg font-semibold text-gray-800 cursor-pointer relative" onClick={logout}>
              <span>{/* Insert username here */}</span>
              <ul className="absolute hidden bg-white shadow-md rounded-md mt-2 py-1 w-24 right-0">
                <li><button onClick={logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button></li>
              </ul>
            </span>
            <FaSignOutAlt onClick={logout} className="text-gray-800 hover:text-gray-500 ml-2 cursor-pointer" />
          </div>
        ) : (
          <a href="/auth/login" className="text-gray-800 hover:text-gray-500 ml-6">
            <FaSignInAlt className="text-3xl" />
            <span className="text-lg font-semibold text-gray-800 cursor-pointer">Login</span>
          </a>
        )}
      </div>
      {/* Logout Confirmation Modal */}
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
