import React from 'react';


const NotFound = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">404 - Not Found</h1>
      <div className="flex justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AJ8GVPW4MWf3A3JsC8akKBW754DIjLSB7Zo53hAj_Q&s" alt="Page not found" className="w-64 h-64" />
      </div>
      <p className="text-gray-600 text-center mt-4">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
