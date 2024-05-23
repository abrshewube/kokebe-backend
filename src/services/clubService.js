import BASE_URL from "../util/server";

const CLUBS_URL = `${BASE_URL}/clubs`;
const CLUBS_ADD = `${BASE_URL}/club-admissions`;

// Function to fetch all clubs
export const getAllClubs = async () => {
  try {
    const response = await fetch(CLUBS_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch clubs');
    }
    const data = await response.json();
    return data.clubs;
  } catch (error) {
    console.error('Error fetching clubs:', error.message);
    throw error;
  }
};

// Function to fetch a club by ID
export const getClubById = async (clubId) => {
  try {
    const response = await fetch(`${CLUBS_URL}/${clubId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch club');
    }
    const data = await response.json();
    return data.club;
  } catch (error) {
    console.error('Error fetching club:', error.message);
    throw error;
  }
};


// Function to apply to join a club
export const applyToJoinClub = async (clubId, userId, reason, contribution) => {
  try {
    const response = await fetch(`${ CLUBS_ADD}/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
      body: JSON.stringify({ clubId, userId, reason, contribution }),
    });
    if (!response.ok) {
      throw new Error('Failed to apply to join club');
    }
    const data = await response.json();
    console.log(data)
    return data.message;
  } catch (error) {
    console.error('Error applying to join club:', error.message);
    throw error;
  }
};

// Function to get club applications for a specific club (for club admins)
export const getClubApplications = async (clubId) => {
  try {
    const response = await fetch(`${CLUBS_ADD}/${clubId}/applications`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch club applications');
    }
    const data = await response.json();
    return data.applications;
  } catch (error) {
    console.error('Error fetching club applications:', error.message);
    throw error;
  }
};

// Function to approve or deny a club application (for club admins)
export const processClubApplication = async (applicationId, status) => {
  try {
    const response = await fetch(`${CLUBS_ADD}/applications/${applicationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error('Failed to process club application');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error processing club application:', error.message);
    throw error;
  }
};

// Function to get user's club applications and their status
export const getUserApplicationss = async () => {
  try {
    const response = await fetch(`${CLUBS_ADD}/user-applications`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user applications');
    
    }
    const data = await response.json();
    console.log(data)
    return data.applications;
  } catch (error) {
    console.error('Error fetching user applications:', error.message);
    throw error;
  }
};

// Function to create a club (accessible only to admins)
export const createClub = async (clubData) => {
  try {
    const response = await fetch(CLUBS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
      body: JSON.stringify(clubData),
    });
    if (!response.ok) {
      throw new Error('Failed to create club');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error creating club:', error.message);
    throw error;
  }
};

// Function to delete a club (accessible only to admins)
export const deleteClub = async (clubId) => {
  try {
    const response = await fetch(`${CLUBS_URL}/${clubId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
    });
    if (!response.ok) {
      throw new Error('Failed to delete club');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error deleting club:', error.message);
    throw error;
  }
};

// Function to assign a club leader (accessible only to admins)
export const assignClubLeader = async (clubId, userId) => {
  try {
    const response = await fetch(`${CLUBS_URL}/assign-leader`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
      },
      body: JSON.stringify({ clubId, userId }),
    });
    if (!response.ok) {
      throw new Error('Failed to assign club leader');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error assigning club leader:', error.message);
    throw error;
  }
};
