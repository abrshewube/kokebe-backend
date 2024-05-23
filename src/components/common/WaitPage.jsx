import React from 'react';

const Message = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>
        <p className="mb-4">
          Once our admins approve that you are a member of our school, you can log in and access our website. This process will take less than 1 hour.
        </p>
        <p className="mb-6">
          So, check your email. Once our admins approve your request, an email will be sent to your email account.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Till then, explore our website.
        </a>
      </div>
    </div>
  );
};

export default Message;
