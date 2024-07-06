import { useEffect, useState } from "react";

const GameList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchGames");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-[#283347] p-6 rounded-lg shadow-md">
          {item.imageBase64 ? (
            <img
              src={`data:image/*;base64,${item.imageBase64}`}
              alt={item.title}
              className="w-full h-auto mb-2 rounded-lg"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto mb-2 rounded-lg"
            />
          )}
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p>Publisher: {item.publisher}</p>
          <p>Release Date: {item.release_date}</p>
          <p>Rating: {item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
