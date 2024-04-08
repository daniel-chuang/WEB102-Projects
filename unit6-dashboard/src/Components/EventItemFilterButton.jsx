function EventItemFilterButton({ type, filter, setFilter }) {
  return (
    <button
      key={type}
      className={`px-5 py-2 rounded ${
        filter === type ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
      onClick={() => setFilter(type)}
    >
      {type.split("_").join(" ")}
    </button>
  );
}

export default EventItemFilterButton;
