import React from 'react';

// img, name, location, details
const Event = (props) => {

    return (
        <div className="Event">
            <img src={props.img} className="event-image"></img>
            <h3>{props.name}</h3>
            <h4>📍 {props.location}</h4>
            <a href={props.details} target="_blank"><button type="button">View Details</button></a>
        </div>
    )
}

export default Event;