import React, { useState } from 'react';
import { createResource } from '../../../services/resources';

function CreateResource() {
    const [formData, setFormData] = useState({
        title: '',
        category: 'text book',
        gradeLevel: '',
        description: '',
        file: null
    });

    const [progress, setProgress] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, category, gradeLevel, description, file } = formData;
        const token = localStorage.getItem('token');

        console.log('Form Data:', formData);
        console.log('Token:', token);

        if (!token) {
            setErrorMessage('No token found, please login again.');
            return;
        }

        const formDataObj = new FormData();
        formDataObj.append('title', title);
        formDataObj.append('category', category);
        formDataObj.append('gradeLevel', gradeLevel);
        formDataObj.append('description', description);
        formDataObj.append('file', file);

        try {
            const resource = await createResource(formDataObj, token);
            console.log('Resource created:', resource);
            setSuccessMessage(resource.message);
            setTimeout(() => {
                setSuccessMessage('');
            }, 1000); // Remove success message after 1 second
        } catch (error) {
            console.error('Error creating resource:', error);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <button onClick={() => window.history.back()} className="  bg-white py-2 px-4 rounded-md hover:bg-gray-600">Back</button>
            <br />
            <div className="card w-full max-w-xl">
                <div className="card-header">
                    
                </div>
                <div className="card-body bg-white shadow-md rounded-md p-8">
               
                    <p className="text-gray-700 mb-6">Please fill out the form below to upload a new resource.</p>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 p-4">
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-gray-700">Title:</label>
                                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-gray-700">Category:</label>
                                    <select id="category" name="category" value={formData.category} onChange={handleChange} required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                                        <option value="text book">Text Book</option>
                                        <option value="teacher guide">Teacher Guide</option>
                                        <option value="teacher notes">Teacher Notes</option>
                                        <option value="worksheets">Worksheets</option>
                                        <option value="exams">Exams</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="gradeLevel" className="block text-gray-700">Grade Level:</label>
                                    <input type="number" id="gradeLevel" name="gradeLevel" value={formData.gradeLevel} onChange={handleChange} min="9" max="12" required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4">
                                <div className="mb-4">
                                    <label htmlFor="description" className="block text-gray-700">Description:</label>
                                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="6" required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="file" className="block text-gray-700">File:</label>
                                    <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                                    </div>
                                    <div className="text-sm text-gray-700 mt-2">{progress}% uploaded</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upload Resource</button>
                        </div>
                    </form>
                </div>
            </div>
            {successMessage && <div className="text-green-600 font-bold">{successMessage}</div>}
            {errorMessage && <div className="text-red-600 font-bold">{errorMessage}</div>}
        </div>
    );
}

export default CreateResource;
