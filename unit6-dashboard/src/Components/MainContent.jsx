import EventItemFilter from "./EventItemFilter";
import EventItem from "./EventItem";
import Chart from "./Chart";
import { useState, useEffect } from "react";

function MainContent() {
  const API_ID = import.meta.env.VITE_APP_API_KEY;

  // REACTIVE DATA
  const [eventsList, setEventItemsList] = useState([]);

  // FILTERS
  const [filter, setFilter] = useState("All");

  // SEARCH BAR FUNCTION
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // FETCHING DATA *AFTER* RENDER
  useEffect(() => {
    // Setting the default filter to all
    setFilter("all");

    // Getting the data
    const fetchAllEventItemData = async () => {
      const response = await fetch(
        `https://api.seatgeek.com/2/events?lat=42.4395&lon=-76.4994&range=50mi&per_page=1000&client_id=${API_ID}`
      );
      const json = await response.json();
      setEventItemsList(json.events);
    };

    fetchAllEventItemData().catch(console.error);
  }, []);

  // Filters
  // Make it a set to remove any duplicates
  const eventTypes = [...new Set(eventsList.map((event) => event.type))];
  eventTypes.unshift("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredEventItems =
    filteredResults != ""
      ? filteredResults.filter((event) => {
          return filter === "all" ? true : event.type === filter;
        })
      : eventsList.filter((event) => {
          return filter === "all" ? true : event.type === filter;
        });

  // Calculate median price
  // Get all prices
  const prices = Object.values(filteredEventItems).map(
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

  if (medianPrice !== null) {
    medianPrice = medianPrice.toFixed(0);
  }

  // Calculate average popularity
  const averagePopularity = (
    Object.values(filteredEventItems).reduce(
      (total, event) => total + event.popularity,
      0
    ) / Object.values(filteredEventItems).length
  ).toFixed(2);

  // Search bar function
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = filteredEventItems.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="w-[80%] h-[80%] m-auto">
      <h2 className="text-2xl p-4 pt-[12%]">Events near Ithaca, New York!</h2>
      <EventItemFilter
        eventTypes={eventTypes}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="p-4">
        <p>Total Events: {filteredEventItems.length}</p>
        <p>Average Price: ${medianPrice}</p>
        <p>Average Popularity: {averagePopularity}</p>
      </div>
      <div className="p-5 m-auto mb-4">
        <Chart events={eventsList} />
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
              // console.log(event.stats);
              return (
                <EventItem
                  title={event.short_title}
                  url={event.url}
                  popularity={event.popularity}
                  type={event.type}
                  date={event.datetime_local}
                  average_price={event.stats.average_price}
                  low_price={event.stats.lowest_price}
                  high_price={event.stats.highest_price}
                  id={event.id}
                />
              );
            })
          : filteredEventItems &&
            Object.values(filteredEventItems).map((event) => {
              return (
                <EventItem
                  title={event.short_title}
                  url={event.url}
                  popularity={event.popularity}
                  type={event.type}
                  date={event.datetime_local}
                  average_price={event.stats.average_price} // changed this line
                  low_price={event.stats.lowest_price}
                  high_price={event.stats.highest_price}
                  id={event.id}
                />
              );
            })}
      </ul>
    </div>
  );
}

export default MainContent;
