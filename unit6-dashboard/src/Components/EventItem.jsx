import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EventItem(props) {
  // const [events, setEventItems] = useState([]);

  const isoDate = props.date;
  const dateObject = new Date(isoDate);
  const simpleDate = dateObject.toLocaleDateString();

  useEffect(() => {});

  return (
    <li className="main-list p-4" key={props.title}>
      <div className="flex flex-row space-x-4">
        <p className="w-1/4">{simpleDate}</p>
        <p className="w-1/4">
          <a href={props.url} target="_blank">
            {props.title}
          </a>
        </p>
        <p className="w-1/4">{props.type.split("_").join(" ")}</p>
        <Link to={`/event/${props.id}`}>Details</Link>
        <div className="w-1/4">
          <p>{`Avg $${props.average_price}`}</p>
          <p>{`Low $${props.low_price}`}</p>
          <p>{`High $${props.high_price}`}</p>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
