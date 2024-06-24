import fs from "fs";
import path from "path";
import Link from "next/link";
import dynamic from "next/dynamic";

const GameForm = dynamic(
  () => import("../../../../components/gameeditform/GameEditForm"),
  {
    ssr: false, // Ensure this component is loaded on the client side
  }
);

async function getGameData(id) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "allgamesdata.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const games = JSON.parse(jsonData);
  return games.find((game) => game.id.toString() === id);
}

export async function generateStaticParams() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "allgamesdata.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const games = JSON.parse(jsonData);

  return games.map((game) => ({
    id: game.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const game = await getGameData(params.id);

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: game.title,
  };
}

export default async function GamePage({ params }) {
  const game = await getGameData(params.id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <GameForm game={game} />
      <div>
        <button>
          <Link href="/admin">Return</Link>
        </button>
      </div>
    </div>
  );
}
