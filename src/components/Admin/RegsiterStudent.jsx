import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { approveRegistration, denyRegistration, getUnregisteredStudents } from '../../services/authService';

const RegisterStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        console.log('Fetching unregistered students...');
        const unregisteredStudents = await getUnregisteredStudents();
        console.log('Fetched unregistered students:', unregisteredStudents);
        setStudents(unregisteredStudents);
      } catch (error) {
        console.error('Error fetching unregistered students:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleApprove = async (id) => {
    try {
      console.log(`Approving student with id: ${id}`);
      await approveRegistration(id);
      console.log(`Approved student with id: ${id}`);
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
    } catch (error) {
      console.error('Approval failed:', error.message);
    }
  };

  const handleDeny = async (id) => {
    try {
      console.log(`Denying student with id: ${id}`);
      await denyRegistration(id);
      console.log(`Denied student with id: ${id}`);
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
    } catch (error) {
      console.error('Denial failed:', error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Register Students</h1>
      {loading ? (
        <p>Loading...</p>
      ) : students.length === 0 ? (
        <p>No unregistered students found</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <li key={student._id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="bg-gray-300 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">{student.fullName}</span>
                </div>
                <div className="flex items-center">
                  <button onClick={() => handleApprove(student._id)} className="text-green-500 mr-2">
                    <FaCheckCircle className="w-6 h-6" />
                  </button>
                  <button onClick={() => handleDeny(student._id)} className="text-red-500">
                    <FaTimesCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">{student.email}</p>
                <p className="text-sm text-gray-600 mb-2">Grade: {student.grade}</p>
                <div>
                  <img src={student.schoolIdPhoto} alt="School ID" className="w-24 h-auto rounded-md" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegisterStudents;
