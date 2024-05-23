import React from 'react';

const GoogleCalendarEmbed = () => {
  return (
    <div>
    <div className="max-w-screen-md mx-auto">
      <div className="bg-white rounded-lg shadow-md mt-8">
        <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg">
          <h1 className="text-xl font-semibold">This is the official Google Calendar for the school "Kokebe Tsibah"</h1>
          <p className="text-sm">Stay updated with school events!</p>
        </div>
       
      </div>
      <div className="mt-8">
     

</div>


    </div>
    <div className="mt-8">
  <iframe
    src="https://calendar.google.com/calendar/embed?src=a29rZWJldHNpYmFoMzIxQGdtYWlsLmNvbQ"
    title="Google Calendar Embed"
    className="h-screen" // Adjust width as needed
    style={{ width:"1400px" }} // Adjust height as needed
    allowFullScreen
  ></iframe>
</div>
    </div>
  );
};

export default GoogleCalendarEmbed;
