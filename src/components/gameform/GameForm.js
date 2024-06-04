"use client";
import { useState } from "react";

const GameForm = () => {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [release, setRelease] = useState("");

  return (
    <div>
      <form onSubmit={""} className="bg-[#283347] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-white-700 font-bold mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
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
            value={release}
            onChange={(e) => setRelease(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
