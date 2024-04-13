import { useState, useEffect } from "react";
import amongus from "./assets/amongus.png";
import { supabase } from "./client.jsx";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("chars")
        .select()
        .order("created_at", { ascending: true });
      setPosts(data);
      console.log(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1>Meet the Crewmates</h1>
      <img src={amongus} className="m-auto w-[40%]"></img>
      {posts.map((post) => (
        <div
          key={post.id}
          className="post border-2 border-gray-300 p-4 m-2 rounded-lg"
        >
          <h2>{post.name}</h2>
          <p>{post.bio}</p>
          <p>{post.color}</p>
          <Link
            to={`/update/${post.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </Link>
        </div>
      ))}
    </>
  );
}

export default App;
