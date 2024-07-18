import { useEffect, useState } from "react";
import Link from "next/link";

const DynamicGames = () => {
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
    return <p className="flex">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div>
            <Link href={`admin/games/${item.id}`}>
              <div
                key={item.id}
                className="bg-[#283347] p-6 rounded-lg shadow-md flex"
              >
                {item.imageBase64 && (
                  <img
                    src={`data:image/*;base64,${item.imageBase64}`}
                    alt={item.title}
                    className="w-20 h-auto mr-3"
                  />
                )}
                <div className="flex flex-col justify-center flex-1">
                  <h2 className="text-lg font-semibold text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicGames;
