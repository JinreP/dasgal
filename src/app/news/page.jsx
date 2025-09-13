"use client";
import { useState } from "react";

export default function News() {
  const newsData = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-09-10",
      author: "Admin",
      content:
        "The annual tech conference will showcase AI and robotics innovations.",
      image: "https://picsum.photos/300/150?random=1",
    },
    {
      id: 2,
      title: "New Movie Released",
      date: "2025-09-09",
      author: "Reporter",
      content: "A new blockbuster film hit theaters worldwide this weekend.",
      image: "https://picsum.photos/300/150?random=2",
    },
    {
      id: 3,
      title: "Sports Championship",
      date: "2025-09-08",
      author: "Sports Desk",
      content: "The national team secured a dramatic win in the final seconds.",
      image: "https://picsum.photos/300/150?random=3",
    },
    {
      id: 4,
      title: "Weather Update",
      date: "2025-09-07",
      author: "Weather Team",
      content: "Heavy rain is expected in the northern regions this weekend.",
      image: "https://picsum.photos/300/150?random=4",
    },
    {
      id: 5,
      title: "Science Discovery",
      date: "2025-09-06",
      author: "Science Daily",
      content: "Researchers discovered a new exoplanet similar to Earth.",
      image: "https://picsum.photos/300/150?random=5",
    },
    {
      id: 6,
      title: "Music Festival",
      date: "2025-09-05",
      author: "Entertainment",
      content:
        "Thousands gathered to enjoy live performances from top artists.",
      image: "https://picsum.photos/300/150?random=6",
    },
    {
      id: 7,
      title: "Space Mission Success",
      date: "2025-09-04",
      author: "NASA",
      content: "A new probe successfully entered orbit around Jupiter.",
      image: "https://picsum.photos/300/150?random=7",
    },
    {
      id: 8,
      title: "Local Startup Funding",
      date: "2025-09-03",
      author: "Business News",
      content: "A local startup raised $5M in seed funding for expansion.",
      image: "https://picsum.photos/300/150?random=8",
    },
    {
      id: 9,
      title: "Gaming Expo",
      date: "2025-09-02",
      author: "Gaming World",
      content: "New next-gen consoles and games were revealed at the expo.",
      image: "https://picsum.photos/300/150?random=9",
    },
    {
      id: 10,
      title: "Health Tips",
      date: "2025-09-01",
      author: "Health Journal",
      content: "Doctors share top 10 tips for a healthier lifestyle this fall.",
      image: "https://picsum.photos/300/150?random=10",
    },
  ];
  const [products, setProducts] = useState(newsData);
  const deleteNews = (deleteIndex) => {
    const deleteBtn = products.filter((_, i) => i !== deleteIndex);
    setProducts(deleteBtn);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col gap-8">
        {products.map((product, index) => {
          return (
            <div
              className="bg-red-500 text-4xl relative text-white font-bold p-6 rounded-lg"
              key={product.id}
            >
              <div className="flex flex-col gap-4">
                <h1>{product.title}</h1>
                <h2>{product.date}</h2> <h3>{product.author}</h3>
                <p>{product.content}</p>
              </div>
              <button
                className="bg-blue-500 w-[200px] rounded-2xl absolute right-2 top-0 active:bg-red-300 hover:to-blue-200  h-[60px] text-4xl text-black"
                onClick={() => deleteNews(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
