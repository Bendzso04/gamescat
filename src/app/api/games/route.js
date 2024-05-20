import fs from "fs";
import path from "path";

export function getGames() {
  const filePath = path.join(process.cwd(), "mockgames.json");

  const fileContent = fs.readFileSync(filePath, "utf8");
  const games = JSON.parse(fileContent);
  return games;
}
