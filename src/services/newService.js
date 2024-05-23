import BASE_URL from "../util/server";

export async function fetchNewsData() {
  try {
    const response = await fetch(`${BASE_URL}/school-news`);
    const data = await response.json();
    return data.news;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
}

export const fetchNewsById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/school-news/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news item');
    }
    const data = await response.json();
    return data.news; // Assuming your backend returns the news item object directly
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }
};

export const createNews = async (title, description, image) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    const response = await fetch(`${BASE_URL}/school-news`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're using JWT authentication
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to create news');
    }
    const data = await response.json();
    return data.news; // Assuming your backend returns the created news item
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/school-news/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're using JWT authentication
      },
    });
    if (!response.ok) {
      throw new Error('Failed to delete news');
    }
    const data = await response.json();
    return data.message; // Assuming your backend returns a success message
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};
