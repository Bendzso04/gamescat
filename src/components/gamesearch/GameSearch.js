import { useState } from "react";

const GameSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 1) {
      const res = await fetch(`/api/searchGames?search=${searchQuery}`);
      const data = await res.json();
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="items-center justify-center min-h-screen bg-gray-800">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="mb-5 p-2 w-full border rounded text-black"
      />
      <ul>
        {results.map((item) => (
          <li key={item._id} className="flex items-center mb-2">
            <img
              src={`data:image/*;base64,${item.imageBase64}`}
              alt={item.image}
              className="w-20 h-auto mr-3"
            />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameSearch;
