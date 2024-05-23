import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaBook, FaDownload, FaSearch } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

const fetchBooks = async (searchTerm, startIndex) => {
  const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=10`);
  return res.data;
};

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('high school');
  const [currentPage, setCurrentPage] = useState(0);

  const { data, error, isLoading } = useQuery({
    queryKey: ['books', searchTerm, currentPage],
    queryFn: () => fetchBooks(searchTerm, currentPage * 10),
    enabled: !!searchTerm,
    keepPreviousData: true,
  });

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const newSearchTerm = form.elements.search.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={150} color={"#123abc"} />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="hero bg-blue-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Books Library</h1>
        <p className="text-lg">Search any books you want, read, and download them at your convenience!</p>
      </div>
      <h1 className="text-4xl font-bold mb-8">Books</h1>
      <form onSubmit={handleSearch} className="mb-8 flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Search for books..."
          className="border border-gray-300 p-2 rounded-l w-2/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r flex items-center justify-center ml-2"
        >
          <FaSearch />
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.items?.map((book) => (
          <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{book.volumeInfo.title}</h2>
              <p className="text-gray-700 mb-4">{book.volumeInfo.authors?.join(', ')}</p>
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center"
              >
                <FaBook className="mr-2" /> View Book
              </a>
              <button
                onClick={() => window.open(book.accessInfo.webReaderLink, '_blank')}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center"
              >
                <FaDownload className="mr-2" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="bg-gray-300 text-gray-700 p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={!data?.items || data.items.length < 10}
          className="bg-gray-300 text-gray-700 p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BooksPage;
