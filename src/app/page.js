import { getGames } from "./api/games/route";
import Gamesgrid from "./components/Gamesgrid";

export default async function Home() {
  const games = await getGames();
  // console.log(games);
  return (
    <div className="home-page">
      <h1 className="ownedgames">Owned Games</h1>
      <section className="games">
        <Gamesgrid />
      </section>
    </div>
  );
}
