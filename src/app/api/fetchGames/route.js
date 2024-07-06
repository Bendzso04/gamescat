import clientPromise from "../../../lib/mongodb";

export const GET = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("gamescat");

    const data = await db.collection("GameData").find({}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
