import { useEffect, useState } from "react";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("data/mockdata.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <div className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-item">
          <img className="game-image" src={game.image} alt={game.title} />
          <h2>{game.title}</h2>
          <p>
            <strong>Publisher:</strong> {game.publisher}
          </p>
          <p>
            <strong>Release Date:</strong>{" "}
            {new Date(game.release_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Rating:</strong> {game.rating}
          </p>
        </div>
      ))}

      <style jsx>{`
        .game-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          color: black;
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
        }
        .game-item {
          border: 1px solid #ccc;
          padding: 16px;
          border-radius: 8px;
          background-color: #f9f9f9;
          text-align: center;
        }
        .game-item img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .game-item h2 {
          margin: 8px 0;
        }
        .game-image{
            height:10px
            width:10px
        }
      `}</style>
    </div>
  );
};

export default GameList;
