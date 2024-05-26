"use client";

import Head from "next/head";
import GameList from "@/components/gamelist/GameList";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="h1">Top 10 Playstation Games</h1>
        <GameList />
      </main>
      <style jsx>{`
        .h1 {
          text-align: center;
          font-size: 5em;
        }
      `}</style>
    </div>
  );
}
