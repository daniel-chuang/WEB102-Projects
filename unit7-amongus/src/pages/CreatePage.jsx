import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./FormPage.css";

const CreatePage = () => {
  const [char, setChar] = useState({
    name: "",
    bio: "",
    color: "",
  });

  // Our endpoint call
  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("chars")
      .insert({
        name: char.name,
        bio: char.bio,
        color: char.color,
      })
      .select();

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
      <h1>Create a New Crewmate!</h1>
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
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePage;
