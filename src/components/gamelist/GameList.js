import { useEffect, useState } from "react";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("data/allgamesdata.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log("error fetching the data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.slice(0, 10).map((game) => (
        <div key={game.id} className="bg-[#283347] p-6 rounded-lg shadow-md">
          <img
            className="w-full h-auto mb-2"
            src={game.image}
            alt={game.title}
          />
          <h2 className="text-lg font-semibold">{game.title}</h2>
          <p>Publisher: {game.publisher}</p>
          <p>Release Date: {game.release_date}</p>
          <p>Rating: {game.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
