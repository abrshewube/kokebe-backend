import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa'; // Import React Icons
import BASE_URL from '../../util/server';

const UnregisteredStudents = () => {
    const [filterGrade, setFilterGrade] = useState('');
    const [filterName, setFilterName] = useState('');
    const [unregisteredStudents, setUnregisteredStudents] = useState([]);

    useEffect(() => {
        fetchUnregisteredStudents();
    }, [filterGrade, filterName]);

    const fetchUnregisteredStudents = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = { 'Authorization': `Bearer ${token}` };

            const response = await axios.get(`${BASE_URL}/registrations/unregistered`, { headers });
            setUnregisteredStudents(response.data.unregisteredStudents);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleApproveRegistration = async (registrationId) => {
        try {
            const token = localStorage.getItem('token');
            const headers = { 'Authorization': `Bearer ${token}` };

            await axios.put(`${BASE_URL}/registrations/approve/${registrationId}`, {}, { headers });
            fetchUnregisteredStudents();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDenyRegistration = async (registrationId) => {
        try {
            const token = localStorage.getItem('token');
            const headers = { 'Authorization': `Bearer ${token}` };

            await axios.put(`${BASE_URL}/registrations/deny/${registrationId}`, {}, { headers });
            fetchUnregisteredStudents();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg py-2 flex justify-between items-center px-4">
                <button className="text-gray-600 hover:text-gray-800" onClick={() => window.history.back()}>
                    <FaArrowLeft /> Back
                </button>
                {/* Navigation content */}
            </nav>

            {/* Main content */}
            <div className="container mx-auto px-4 mt-8">
                <h1 className="text-2xl font-bold mb-4">Unregistered Students</h1>
                {/* Filter options */}
                <div className="mb-4">
                    <label htmlFor="filterGrade" className="block font-semibold">Filter by Grade:</label>
                    <select id="filterGrade" className="border rounded px-4 py-2" value={filterGrade} onChange={(e) => setFilterGrade(e.target.value)}>
                        <option value="">All Grades</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="filterName" className="block font-semibold">Filter by Name:</label>
                    <input type="text" id="filterName" className="border rounded px-4 py-2" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
                </div>
                {/* Student list */}
                <div className="mb-8">
                    {unregisteredStudents.length === 0 ? (
                        <p>No unregistered students found.</p>
                    ) : (
                        unregisteredStudents.map(student => (
                            <div key={student._id} className="bg-white p-4 mb-2 rounded shadow">
                                <p><strong>Name:</strong> {student.fullName}</p>
                                <p><strong>Grade:</strong> {student.grade}</p>
                                <p><strong>Last Year Section:</strong> {student.lastYearSection}</p>
                                <p><strong>Last Year Grade Result:</strong> <a href={student.lastYearGradeResult} target="_blank" rel="noopener noreferrer">View</a></p>
                                <div className="mt-4">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2" onClick={() => handleApproveRegistration(student._id)}><FaCheck /> Approve</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2" onClick={() => handleDenyRegistration(student._id)}><FaTimes /> Deny</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default UnregisteredStudents;
