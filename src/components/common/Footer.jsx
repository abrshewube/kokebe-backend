import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              
                <div>
                    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                    <ul className="text-sm">
                        <li><i className="fas fa-envelope text-blue-500"></i> <a href="mailto:info@kokebetsibah.edu.et" className="hover:text-blue-500">info@kokebetsibah.edu.et</a></li>
                        <li><i className="fas fa-phone text-blue-500"></i> <a href="tel:+251123456789" className="hover:text-blue-500">+251 123 456 789</a></li>
                        <li><i className="fas fa-map-marker-alt text-blue-500"></i> Addis Ababa, Ethiopia</li>
                    </ul>
                </div>
             
                <div>
                    <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-500">Admission</a></li>
                        <li><a href="#" className="hover:text-blue-500">Events</a></li>
                        <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
                    </ul>
                </div>
             
                <div>
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:text-blue-500">Student Portal</a></li>
                        <li><a href="#" className="hover:text-blue-500">Faculty Portal</a></li>
                        <li><a href="#" className="hover:text-blue-500">Staff Directory</a></li>
                        <li><a href="#" className="hover:text-blue-500">Alumni</a></li>
                    </ul>
                </div>
              
                <div>
                    <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                    <ul className="flex items-center space-x-4">
                        <li><a href="#" className="text-2xl transition duration-300" style={{color: '#3b5998'}}><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" className="text-2xl transition duration-300" style={{color: '#1da1f2'}}><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="text-2xl transition duration-300" style={{color: '#c13584'}}><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" className="text-2xl transition duration-300" style={{color: '#0077b5'}}><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 md:mt-12 text-center text-sm">
                <p>&copy; 2024 Kokebe Tsibah Highschool. All Rights Reserved.</p>
                <p>Designed with <i class="fas fa-heart text-red-500"></i> by Your Team</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
