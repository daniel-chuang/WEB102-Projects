// https://coolors.co/f4e409-eeba0b-c36f09-a63c06-710000
import { useState, useEffect } from "react";
import "./App.css";
import PrimaryPhoto from "./components/PrimaryPhoto";
import History from "./components/History";
import Filters from "./components/Filters";

function App() {
  const [photo, setPhoto] = useState(null);
  const [catID, setCatID] = useState(null);
  const [catName, setCatName] = useState(null);
  const [catTemperament, setCatTemperament] = useState(null);

  const [filters, setFilters] = useState([]);
  const [prevImages, setPrevImages] = useState([]);

  // NETWORKING //

  const getCat = async (query) => {
    do {
      console.log("GETTING CAT");
      // Fetching the image and ID first
      const imageResponse = await fetch(query);
      const imageJson = await imageResponse.json();
      if (imageResponse.url == null) {
        alert(
          "Oops! Something went wrong with the image query, let's try again!"
        );
      } else {
        // If successful, fetch the data for the cat based on the ID
        const dataResponse = await fetch(
          `https://api.thecatapi.com/v1/images/${imageJson[0].id}`
        );
        const dataJson = await dataResponse.json();
        const tempTemperament = dataJson.breeds[0].temperament
          .split(",")
          .map((temp) => temp.trim())
          .map((temp) => temp.slice(0, 1).toUpperCase() + temp.slice(1));
        if (dataResponse.url == null) {
          alert(
            "Oops! Something went wrong with the data query, let's try again!"
          );
        } else {
          // Check if the image's category is not in the excluded categories
          console.log(filters);
          console.log(tempTemperament);
          if (
            !tempTemperament ||
            !filters.some((filter) => tempTemperament.includes(filter))
          ) {
            setCatName(dataJson.breeds[0].name);
            setCatTemperament(tempTemperament);
            setCatID(imageJson[0].id);
            setPrevImages((prevImages) => [...prevImages, imageJson[0].url]);
            await setPhoto(imageJson[0].url);
            break;
          }
        }
      }
    } while (true);
  };

  const makeQuery = async () => {
    let query = `https://api.thecatapi.com/v1/images/search?has_breeds=1`;
    await getCat(query).catch(console.error);
  };

  // INIT THE SITE //
  useEffect(() => {
    makeQuery();
  }, []);

  const addFilter = (attr) => {
    if (filters.length >= 4) {
      alert("Too many filters, please remove one to add another!");
    } else if (!filters.includes(attr)) {
      setFilters([...filters, attr]);
    }
  };

  const removeFilter = (attr) => {
    const newFilters = filters.filter((filter) => filter !== attr);
    setFilters(newFilters);
  };

  return (
    // <div className="flex h-screen w-screen top-0 left-0 bg-amber-700">
    <div className="w-full h-full flex justify-between items-center brightness-[100%]">
      <History images={prevImages} />
      <div className="w-[45%] h-[80%] bg-[#C36F09]">
        {photo && (
          <PrimaryPhoto
            image={photo}
            name={catName}
            temperament={catTemperament}
            buttonFunction={addFilter}
          />
        )}
        <button
          id="newCatButton"
          className="text-white mt-[50px]"
          onClick={makeQuery}
        >
          Meet a new cat!
        </button>
      </div>
      <Filters filters={filters} buttonFunction={removeFilter} />
    </div>
  );
}

export default App;
