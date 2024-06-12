import { useEffect, useState } from "react";

const AdminGameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("data/allgamesdata.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log("error fetching the data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <div key={game.id} className="bg-[#1e2839] p-6 rounded-lg shadow-md">
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
      ))}
    </div>
  );
};

export default AdminGameList;
