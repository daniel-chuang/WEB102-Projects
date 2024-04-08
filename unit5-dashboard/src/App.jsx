import { useState, useEffect } from "react";
import Event from "./Components/Event";
import "./App.css";

// https://api.seatgeek.com/2/events?lat=42.4395&lon=-76.4994&range=25mi&client_id=MzE3MTkwNTl8MTcxMTkzNTAyOC43Njc4NTk1&per_page=100
// https://api.seatgeek.com/2/events?lat=42.4395&lon=-76.4994&range=50mi&client_id=MzE3MTkwNTl8MTcxMTkzNTAyOC43Njc4NTk1&per_page=100

function App() {
  const API_ID = import.meta.env.VITE_APP_API_KEY;

  // REACTIVE DATA
  const [eventsList, setEventsList] = useState([]);

  // FILTERS
  const [filter, setFilter] = useState("All");

  // SEARCH BAR FUNCTION
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // FETCHING DATA *AFTER* RENDER
  useEffect(() => {
    const fetchAllEventData = async () => {
      const response = await fetch(
        `https://api.seatgeek.com/2/events?lat=42.4395&lon=-76.4994&range=50mi&per_page=1000&client_id=${API_ID}`
      );
      const json = await response.json();
      setEventsList(json.events);
      console.log(json.events);
    };

    fetchAllEventData().catch(console.error);
  }, []);

  // Filters
  const eventTypes = [...new Set(eventsList.map((event) => event.type))];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredEvents = eventsList.filter((event) => {
    console.log(filter, event.type);
    console.log(event.type === filter);
    return filter === "All" ? true : event.type === filter;
  });

  console.log(filteredEvents);

  // Calculate median price
  // Get all prices
  const prices = Object.values(filteredEvents).map(
    (event) => event.stats.average_price
  );

  // Sort prices
  prices.sort((a, b) => a - b);

  // Calculate median
  let medianPrice;
  const mid = Math.floor(prices.length / 2);

  if (prices.length % 2) {
    medianPrice = prices[mid];
  } else {
    medianPrice = (prices[mid - 1] + prices[mid]) / 2.0;
  }

  medianPrice = medianPrice.toFixed(0);

  // Calculate average popularity
  const averagePopularity = (
    Object.values(filteredEvents).reduce(
      (total, event) => total + event.popularity,
      0
    ) / Object.values(filteredEvents).length
  ).toFixed(2);

  // Search bar function
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.values(filteredEvents).filter((item) => {
        console.log(
          Object.values(item.title)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(filteredEvents));
    }
  };

  // HTML
  return (
    <div className="w-[80%]">
      <h1 className="p-2">Ithaca Event Finder</h1>
      <h2 className="text-2xl p-2">Events near Ithaca, New York!</h2>
      <div className="flex overflow-x-auto no-scrollbar gap-5 py-2 pb-4">
        {eventTypes.map((type) => (
          <button
            key={type}
            className={`px-5 py-2 rounded ${
              filter === type ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
            onClick={() => setFilter(type)}
          >
            {type.split("_").join(" ")}
          </button>
        ))}
      </div>
      <div className="p-4">
        <p>Total Events: {filteredEvents.length}</p>
        <p>Average Price: ${medianPrice}</p>
        <p>Average Popularity: {averagePopularity}</p>
      </div>
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Search by event name..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />{" "}
      <ul className="text-left ">
        {searchInput.length > 0
          ? filteredResults.map((event) => {
              return (
                <Event
                  title={event.short_title}
                  url={event.url}
                  popularity={event.popularity}
                  type={event.type}
                  date={event.datetime_local}
                  medianPrice={event.stats.average_price}
                  low_price={event.stats.lowest_price}
                  high_price={event.stats.highest_price}
                />
              );
            })
          : filteredEvents &&
            Object.values(filteredEvents).map((event) => {
              return (
                <Event
                  title={event.short_title}
                  url={event.url}
                  popularity={event.popularity}
                  type={event.type}
                  date={event.datetime_local}
                  avg_price={event.stats.average_price}
                  low_price={event.stats.lowest_price}
                  high_price={event.stats.highest_price}
                />
              );
            })}
      </ul>
    </div>
  );
}

export default App;
