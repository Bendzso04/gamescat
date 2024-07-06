"use client";
import GameList from "../components/gamelist/GameList";

export default function Home() {
  return (
    <div className="min-h-screen  p-8">
      <main>
        <h1 className="text-4xl font-bold text-center mb-8">
          Top 10 Playstation Games
        </h1>
        <GameList />
      </main>
    </div>
  );
}
