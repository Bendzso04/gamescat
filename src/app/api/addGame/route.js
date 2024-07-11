import clientPromise from "../../../lib/mongodb";

export const POST = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("gamescat");
    const body = await req.json();

    const { title, publisher, release_date, rating, imageBase64 } = body;

    const count = await db.collection("GameData").countDocuments();
    const newId = count + 1;

    const imageName = title.toLowerCase().replace(/\s+/g, "-") + ".avif";
    const imageUrl = `images/${imageName}`;

    const newGame = {
      id: newId,
      title,
      publisher,
      release_date,
      rating,
      image: imageUrl,
      imageBase64,
    };

    await db.collection("GameData").insertOne(newGame);

    return new Response(
      JSON.stringify({ message: "Game added successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
