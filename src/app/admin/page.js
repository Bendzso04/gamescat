// src/app/page.js
import LogoutBtn from "../../components/logoutbtn/LogoutBtn";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function HomePage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "allgamesdata.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const games = JSON.parse(jsonData);

  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link href={`admin/games/${game.id}`}>{game.title}</Link>
          </li>
        ))}
      </ul>
      <LogoutBtn />
    </div>
  );
}
