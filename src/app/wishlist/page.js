"use client";
import { useState } from "react";

export default function Wishlist() {
  const [inputVal, setInputVal] = useState(false);
  return (
    <div>
      <h1>Wishlisted Game form</h1>
      <form>
        <div>
          <label>Game Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Publisher</label>
          <input type="text" name="publisher" />
        </div>
        <div>
          <label>Year of Release</label>
          <input type="number" name="release" />
        </div>

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}
