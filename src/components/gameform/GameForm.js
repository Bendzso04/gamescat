"use client";

import { useState, useEffect } from "react";

const GameForm = () => {
  const [file, setFile] = useState(null);
  const [games, setGames] = useState([]);
  const [publishersJSON, setPublishersJSON] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    publisher: "",
    release_date: "",
    rating: "",
    image: "images/placeholder.png",
  });

  // Fetch the games data
  useEffect(() => {
    fetch("data/allgamesdata.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log("error fetching the data:", error));
  }, []);

  // Extract unique publishers
  useEffect(() => {
    if (games.length > 0) {
      const extractPub = (games) => {
        const pub = games.map((game) => ({
          id: game.id,
          publisher: game.publisher,
        }));

        const uniquePub = pub.filter(
          (publisher, index, self) =>
            index === self.findIndex((p) => p.publisher === publisher.publisher)
        );

        return uniquePub;
      };

      const extractedPublishers = extractPub(games);
      setPublishersJSON(extractedPublishers);
      // console.log(extractedPublishers);
    }
  }, [games]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
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
      setFormData({
        id: "",
        title: "",
        publisher: "",
        release_date: "",
        rating: "",
        image: "images/placeholder.png",
      });
      alert("Game added successfully");
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
          <select
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a publisher</option>
            {publishersJSON.map((publisher) => (
              <option key={publisher.id} value={publisher.publisher}>
                {publisher.publisher}
              </option>
            ))}
          </select>
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
