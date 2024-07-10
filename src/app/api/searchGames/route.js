import clientPromise from "../../../lib/mongodb";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search") || "";

    const client = await clientPromise;
    const db = client.db("gamescat");
    const collection = db.collection("GameData");

    const results = await collection
      .find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          { publisher: { $regex: search, $options: "i" } },
        ],
      })
      .toArray();

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching search results:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch search results" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
