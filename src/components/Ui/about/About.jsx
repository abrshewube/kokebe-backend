import React from 'react';
import { FaQuestionCircle, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const AboutPage = () => {
  const placeholderImage = 'https://via.placeholder.com/150'; // Placeholder image URL

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto py-8">
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Welcome to the AI Club of Kokeb Tsebah</h2>
          <p className="text-lg text-center text-gray-700 leading-relaxed">Embark on a journey through the fascinating world of artificial intelligence with us. We are dedicated to fostering innovation, learning, and collaboration among our members.</p>
        </section>
        
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Our Mission and Vision</h2>
          <div className="text-lg mb-6 text-gray-700">
            <p><strong className="text-lg">Mission:</strong> To drive innovation in artificial intelligence and excel in competitions, while educating and inspiring students through hands-on learning and collaborative projects.</p>
            <p><strong className="text-lg">Vision:</strong> To cultivate a community of young AI enthusiasts who will lead future technological advancements.</p>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">What We Do</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Regular Meetings: Join us every Wednesday and Friday for discussions, coding sessions, and more.</li>
            <li>Workshops: Learn from experts and get hands-on experience.</li>
            <li>Projects: Work on real-world AI projects and showcase your work.</li>
            <li>Competitions: We proudly ranked first in the Yeka Subcity AI competition.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Meet Our Team</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>President: gemechis <img src={placeholderImage} alt="Placeholder" className="inline-block h-12 w-12 rounded-full" /></li>
            <li>Vice President: kidus <img src={placeholderImage} alt="Placeholder" className="inline-block h-12 w-12 rounded-full" /></li>
            <li>Secretary: hikma <img src={placeholderImage} alt="Placeholder" className="inline-block h-12 w-12 rounded-full" /></li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Member Experiences</h2>
          <div className="text-lg text-gray-700 mb-4">
            <p className="mb-2">"Being part of the AI Club has been an incredible journey. I have learned so much and made great friends." – Abrham</p>
            <p>"Winning the Yeka Subcity competition was a huge accomplishment for our team." – Abeni</p>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">FAQ</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaQuestionCircle className="text-blue-500 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">How many members does your club have?</h3>
                <p className="text-lg">There are 50 students in our club!</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaQuestionCircle className="text-blue-500 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Who established this AI club?</h3>
                <p className="text-lg">The Ethiopian Artificial Intelligence Institute.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4"><FaEnvelope className="text-blue-500 mr-2" /> Email Address: email@example.com</p>
          <div className="flex items-center text-lg text-gray-700 mb-4">
            <FaFacebook className="text-blue-500 mr-2" /> Facebook: -
          </div>
          <div className="flex items-center text-lg text-gray-700 mb-4">
            <FaInstagram className="text-blue-500 mr-2" /> Instagram: <a href="https://www.instagram.com/ai_of_kehas22?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-blue-500">ai_of_kehas22</a>
          </div>
          <p className="flex items-center text-lg text-gray-700 mb-4"><FaMapMarkerAlt className="text-blue-500 mr-2" /> Location: grade 9&10 ict lab, Main Building</p>
          <p className="flex items-center text-lg text-gray-700"><FaClock className="text-blue-500 mr-2" /> Meeting Times: Wednesdays and Fridays, 7:00 PM - 7:00 PM</p>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Join Us!</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Interested in AI? Contact us at example@gmail.com. Follow us on our Social Media to stay updated!</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
