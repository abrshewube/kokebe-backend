// App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/common/Home';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Register';
import News from './components/News/News';
import NewsDetails from './components/News/NewsDetail';
import Clubs from './components/clubs/Clubs';
import ClubDetails from './components/clubs/ClubsDetails';
import RegisterStudents from './components/Admin/RegsiterStudent';
import CreateNews from './components/Admin/News/CreateNews';
import Grade10ChemistryMidtermExam from './components/Exam/Quiz';
import Resources from './components/Resources/GetResources';
import CreateResource from './components/Admin/Resources/resources';
import CreateClubs from './components/Admin/Clubs/CreateClub';
import ApplyPage from './components/clubs/Apply';
import GetApplicationStatus from './components/clubs/GetApplicationStatus';
import GoogleCalendarEmbed from './components/Events/GoogleCalendarEvents';
import ClubApplications from './components/Admin/Clubs/ClubApplications';
import AssignClubLeader from './components/Admin/Clubs/AssignClubLeader';
import BooksPage from './components/Entertaiment/BooksPage';
import YouTubePage from './components/Entertaiment/YotubePage';
import BlogPage from './components/Entertaiment/Blog';
import AddGradesPage from './components/Grade/Grade';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists in localStorage

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route path="/auth/register" element={isAuthenticated ? <Navigate to="/" /> : <Registration />} />

          {/* News */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />

          {/* Clubs */}
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetails />} />
          <Route path="/clubs/apply" element={<ApplyPage />} />
          <Route path="/clubs/status" element={<GetApplicationStatus />} />
          <Route path="/events" element={<GoogleCalendarEmbed />} />

        {/* Admin */}
        <Route path="/admin/regsiter-user" element={<RegisterStudents />} />
        <Route path="/admin/create-news" element={<CreateNews />} />
        <Route path="/admin/club-applications" element={<ClubApplications />} />
        <Route path="/admin/assign-leader" element={<AssignClubLeader />} />



        {/* Resources */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/admin/resources" element={<CreateResource/>} />
        <Route path="/admin/clubs" element={<CreateClubs/>} />



        <Route path="/quiz" element={<Grade10ChemistryMidtermExam />} />

        {/* Luxury */}
        <Route path="/entertaiment/books" element={<BooksPage />} />
        <Route path="/entertaiment/videos" element={<YouTubePage />} />
        <Route path="/entertaiment/blogs" element={<BlogPage />} />


        <Route path="/grades" element={<AddGradesPage />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
