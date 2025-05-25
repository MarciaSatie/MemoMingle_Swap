import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";


export default function CreateCard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rarity, setRarity] = useState("Common");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "cards"), {
      title,
      content,
      rarity,
      createdAt: serverTimestamp(),
    });
    alert("Card saved!");
    setTitle("");
    setContent("");
    setRarity("Common");
  } catch (error) {
    console.error("Error saving card:", error);
    alert("Failed to save card");
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create New Card</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={5}
          className="p-2 border rounded"
        />
        <select
          value={rarity}
          onChange={(e) => setRarity(e.target.value)}
          className="p-2 border rounded"
        >
          <option>Common</option>
          <option>Rare</option>
          <option>Epic</option>
          <option>Legendary</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-700 text-white p-3 rounded hover:bg-indigo-800 transition"
        >
          Create Card
        </button>
      </form>
    </div>
  );
}
