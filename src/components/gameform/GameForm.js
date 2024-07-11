"use client";

import { useState } from "react";

const GameForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    publisher: "",
    release_date: "",
    rating: "",
    imageBase64: "",
  });
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        imageBase64: reader.result.split(",")[1],
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/addGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setMessage(result.message);
      setFormData({
        title: "",
        publisher: "",
        release_date: "",
        rating: "",
        imageBase64: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Error: " + err.message);
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
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 font-bold mb-2">Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div>
            {selectedImage ? (
              <img src={selectedImage} className="w-20 h-auto mr-3" />
            ) : (
              <span>Image Preview</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Game
        </button>
      </form>
      {message && <p className="text-white-700">{message}</p>}
    </div>
  );
};

export default GameForm;
