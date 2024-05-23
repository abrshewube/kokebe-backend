import React, { useState } from 'react';

const AddGradesPage = () => {
  // Dummy data for students and subjects
  const [students] = useState([
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    { id: 3, name: 'Student 3' },
    { id: 4, name: 'Student 4' },
    { id: 5, name: 'Student 5' },
  ]);

  const [subjects] = useState([
    'Math',
    'Science',
    'English',
    'History',
    'Geography',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Art',
  ]);

  // State to store selected student, subject, and grade
  const [selectedStudent, setSelectedStudent] = useState('');
  const [grades, setGrades] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add grades for all subjects for the selected student
    const newGrades = subjects.map(subject => ({
      student: selectedStudent,
      subject,
      grade: parseInt(event.target[subject].value),
    }));
    setGrades([...grades, ...newGrades]);
    // Reset form fields
    event.target.reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Add Grades</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="student" className="block font-bold mb-2">Select Student:</label>
          <select
            id="student"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          >
            <option value="">Select Student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </select>
        </div>
        {selectedStudent && (
          <div>
            <h2 className="text-2xl font-bold mb-2">{students.find(student => student.id === parseInt(selectedStudent))?.name}'s Grades</h2>
            {subjects.map(subject => (
              <div key={subject}>
                <label htmlFor={subject} className="block font-bold mb-2">{subject} Grade:</label>
                <input
                  type="number"
                  id={subject}
                  name={subject}
                  min="0"
                  max="100"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
      {grades.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Grades Summary</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Student</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{students.find(student => student.id === parseInt(grade.student))?.name}</td>
                  <td className="border px-4 py-2">{grade.subject}</td>
                  <td className="border px-4 py-2">{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddGradesPage;
