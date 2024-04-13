import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./FormPage.css";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const { id } = useParams();

  const [char, setChar] = useState({
    name: "",
    bio: "",
    color: "",
  });

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("chars").delete().eq("id", id);

    window.location = "/";
  };

  // Our endpoint call
  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("chars")
      .update({
        name: char.name,
        bio: char.bio,
        color: char.color,
      })
      .eq("id", id);

    window.location = "/";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChar((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>Update Your Crewmate!</h1>
      <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="bio">Description</label>
        <br />
        <input type="text" id="bio" name="bio" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="color">Color</label>
        <br />
        <select id="color" name="color" onChange={handleChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
        <br />
        <button
          className="deleteButton bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={deletePost}
        >
          Delete
        </button>
        <input type="submit" value="Submit" onClick={updatePost} />
      </form>
    </div>
  );
};

export default UpdatePage;
