"use client";
import { useState, useEffect } from "react";

export default function GameForm({ game }) {
  const [formData, setFormData] = useState({
    title: game.title,
    publisher: game.publisher,
    release_date: game.release_date,
    rating: game.rating,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log(formData);
  };

  return (
    <form
      className="bg-[#283347] p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-white-700 font-bold mb-2">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700 font-bold mb-2">
          Publisher:
        </label>
        <input
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700 font-bold mb-2">
          Release Date:
        </label>
        <input
          type="date"
          name="release_date"
          value={formData.release_date}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700 font-bold mb-2">Rating:</label>
        <input
          type="number"
          min="0"
          max="10"
          maxLength="3"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          value="upload"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
