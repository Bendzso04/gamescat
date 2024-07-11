import { useState, useEffect } from "react";

const GameSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);

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

  const handleAddGame = (item) => {
    if (!selectedGames.some((selectedGame) => selectedGame.id === item.id)) {
      const updatedSelectedGames = [...selectedGames, item];
      setSelectedGames(updatedSelectedGames);
      localStorage.setItem(
        "selectedGames",
        JSON.stringify(updatedSelectedGames)
      );
    }
  };

  const handleRemoveGame = (gameId) => {
    const updatedSelectedGames = selectedGames.filter(
      (item) => item.id !== gameId
    );
    setSelectedGames(updatedSelectedGames);
    localStorage.setItem("selectedGames", JSON.stringify(updatedSelectedGames));
  };

  const isGameSelected = (item) =>
    selectedGames.some((selectedGame) => selectedGame.id === item.id);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem("selectedGames"));
    if (savedGames) {
      setSelectedGames(savedGames);
    }
  }, []);

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
            <span className="flex-grow">{item.title}</span>
            <button
              onClick={() => handleAddGame(item)}
              className={`ml-2 px-4 py-2 rounded text-white ${
                isGameSelected(item)
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
              {isGameSelected(item) ? "Added" : "Add"}
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl mt-5 mb-3 text-center">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-2 border-white h-3/5">
        {selectedGames.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 h-1/2">
            Wishlist is empty.
          </p>
        ) : (
          selectedGames.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e2839] p-6 rounded-lg shadow-md"
            >
              <img
                src={`data:image/*;base64,${item.imageBase64}`}
                alt={item.image}
                className="w-full h-auto mb-2"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.publisher}</p>
              <p>{item.release_date}</p>
              <p>Rating: {item.rating}</p>
              <button
                onClick={() => handleRemoveGame(item.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameSearch;
