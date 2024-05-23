// authService.js

import BASE_URL from "../util/server";

const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    // Assume the backend returns a token upon successful login
    const token = data.token;
    // Store the token in localStorage for further authentication
    localStorage.setItem('token', token);
    return true;

  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

const logout = () => {
  // Remove token from localStorage
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  // Check if token exists in localStorage
  const token = localStorage.getItem('token');
  return token !== null;
};


const register = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    // Assume the backend returns a token upon successful registration
    const token = data.token;
    // Store the token in localStorage for further authentication
    localStorage.setItem('token', token);
    return true;

  } catch (error) {
    console.error('Registration failed:', error.message);
    throw error;
  }
};

const approveRegistration = async (registrationId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/approve/${registrationId}`, {
      method: 'PUT', // Assuming the backend endpoint for approval is a POST request
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming authentication is required for this action
      },
    });

    if (!response.ok) {
      throw new Error('Approval failed');
    }

    return true;
  } catch (error) {
    console.error('Approval failed:', error.message);
    throw error;
  }
};

const denyRegistration = async (registrationId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/deny/${registrationId}`, {
      method: 'PUT', // Assuming the backend endpoint for denial is a POST request
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming authentication is required for this action
      },
    });

    if (!response.ok) {
      throw new Error('Denial failed');
    }

    return true;
  } catch (error) {
    console.error('Denial failed:', error.message);
    throw error;
  }
};
const getUnregisteredStudents = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/unregistered-students`, {
      method: 'GET', // Assuming the backend endpoint for fetching unregistered students is a GET request
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming authentication is required for this action
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch unregistered students');
    }

    const data = await response.json();
    return data; // Assuming the response data contains the list of unregistered students

  } catch (error) {
    console.error('Failed to fetch unregistered students:', error.message);
    throw error;
  }
};

// Function to get all users (for admin)
 const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/all`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    console.log("users",data)
    return data.users || []; // Ensure it returns an array
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

export { login, logout, getAllUsers,isAuthenticated,register, approveRegistration, denyRegistration, getUnregisteredStudents };

