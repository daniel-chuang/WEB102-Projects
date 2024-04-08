import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedEventView = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const API_ID = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    // Getting the data
    const fetchEventItemData = async () => {
      const response = await fetch(
        `https://api.seatgeek.com/2/events/${id}?&client_id=${API_ID}`
      );
      const json = await response.json();
      setEvent(json);
    };

    fetchEventItemData().catch(console.error);
  }, []);

  if (!event) return <div>Loading...</div>;
  // Simplified date
  const isoDate = event.datetime_local;
  const dateObject = new Date(isoDate);
  const simpleDate = dateObject.toLocaleDateString();

  return (
    <div className="flex space-x-20">
      <img
        className="mx-auto my-[20px] w-[50%] h-[50%]"
        src={event.performers[0].image}
        alt={event.title}
      />
      <div className="flex-col space-y-2 text-left">
        <h1 className="mb-[20px]">{event.title}</h1>
        <p>Date: {simpleDate}</p>
        <p>Venue: {event.venue.name}</p>
        <p>Address: {event.venue.address}</p>
        <p>Performers:</p>
        <ul className="list-disc ml-5">
          {event.performers.map((performer, index) => (
            <li key={index}>{performer.name}</li>
          ))}
        </ul>
        <p>Description: {event.description}</p>
      </div>
    </div>
  );
};

export default DetailedEventView;
