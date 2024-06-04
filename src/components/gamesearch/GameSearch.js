import allgamesdata from "/public/data/allgamesdata";
import { useEffect, useState } from "react";

const GameSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem("selectedGames"));
    if (savedGames) {
      setSelectedGames(savedGames);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredGames(
        allgamesdata.filter((game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredGames([]);
    }
  }, [searchTerm]);

  const handleAddGame = (game) => {
    if (!selectedGames.some((selectedGame) => selectedGame.id === game.id)) {
      const updatedSelectedGames = [...selectedGames, game];
      setSelectedGames(updatedSelectedGames);
      localStorage.setItem(
        "selectedGames",
        JSON.stringify(updatedSelectedGames)
      );
    }
  };

  const handleRemoveGame = (gameId) => {
    const updatedSelectedGames = selectedGames.filter(
      (game) => game.id !== gameId
    );
    setSelectedGames(updatedSelectedGames);
    localStorage.setItem("selectedGames", JSON.stringify(updatedSelectedGames));
  };

  const isGameSelected = (game) =>
    selectedGames.some((selectedGame) => selectedGame.id === game.id);

  return (
    <div className=" items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-[#283347] p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-5 p-2 w-full border rounded text-black"
        />

        <div>
          {filteredGames.map((game) => (
            <div key={game.id} className="flex items-center mb-2">
              <img
                src={game.image}
                alt={game.title}
                className="w-12 h-auto mr-3"
              />
              <span className="flex-grow">{game.title}</span>
              <button
                onClick={() => handleAddGame(game)}
                className={`ml-2 px-4 py-2 rounded text-white ${
                  isGameSelected(game)
                    ? "bg-green-500 hover:bg-green-700"
                    : "bg-blue-500 hover:bg-blue-700"
                }`}
              >
                {isGameSelected(game) ? "Added" : "Add"}
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-xl mt-5 mb-3 text-center">My Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-2 border-white h-3/5">
          {selectedGames.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 h-1/2">
              Wishlist is empty.
            </p>
          ) : (
            selectedGames.map((game) => (
              <div
                key={game.id}
                className="bg-[#1e2839] p-6 rounded-lg shadow-md"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">{game.title}</h3>
                <p>{game.publisher}</p>
                <p>{game.release_date}</p>
                <p>Rating: {game.rating}</p>
                <button
                  onClick={() => handleRemoveGame(game.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSearch;
