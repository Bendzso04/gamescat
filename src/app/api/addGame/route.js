import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const filePath = path.join(process.cwd(), "public/data/allgamesdata.json");

  // Read the existing JSON file
  const fileContents = fs.readFileSync(filePath, "utf8");
  const allGamesData = JSON.parse(fileContents);

  // Determine the highest existing id
  const highestId = allGamesData.reduce(
    (maxId, game) => Math.max(game.id, maxId),
    0
  );

  // Parse the incoming request body
  const newGameData = await req.json();
  newGameData.id = highestId + 1; // Assign the new id

  allGamesData.push(newGameData);

  // Write the updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(allGamesData, null, 2), "utf8");

  return NextResponse.json({ message: "Game data added successfully!" });
}
