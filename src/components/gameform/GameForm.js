"use client";

import { useState } from "react";

const GameForm = () => {
  const [file, setFile] = useState(null);

  const initialFormData = {
    id: "",
    title: "",
    publisher: "",
    release_date: "",
    rating: "",
    image: "images/placeholder.png",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const response = await fetch("/api/addGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Game data added successfully");
      setFormData(initialFormData);
    } else {
      console.error("Failed to add game data");
    }
  };

  return (
    <div>
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
            type="text"
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
        <div className="mb-4">
          <label className="block text-white-700 font-bold mb-2">
            Image:
            <input
              type="file"
              name="image"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="upload"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
