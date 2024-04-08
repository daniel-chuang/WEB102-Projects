import EventItemFilterButton from "./EventItemFilterButton";

function EventItemFilter({ eventTypes, filter, setFilter }) {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-5 py-2 pb-4">
      {eventTypes.map((type) => (
        <EventItemFilterButton
          key={type}
          type={type}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
}

export default EventItemFilter;
