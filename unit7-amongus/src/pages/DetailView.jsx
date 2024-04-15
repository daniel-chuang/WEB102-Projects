import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

function DetailView() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("chars").select().eq("id", id);
      setItem(data[0]);
      console.log(data);
    };

    fetchPost();
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{ color: item.color }}>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default DetailView;
