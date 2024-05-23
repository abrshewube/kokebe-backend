import BASE_URL from "../util/server";

// Function to fetch resources based on category
export const fetchResourcesByCategory = async (category, token) => {
  try {
    const response = await fetch(`${BASE_URL}/resources?category=${category}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch resources');
    }
    const { resources } = await response.json();
    return resources;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createResource = async (formData, token) => {
  try {
    const response = await fetch(`${BASE_URL}/resources/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to create resource');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
