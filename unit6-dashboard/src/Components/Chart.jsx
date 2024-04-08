import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Chart = ({ events }) => {
  // Assuming events is an array of objects with a 'name' and 'value' property
  const eventsForChart = events.reduce((acc, event) => {
    // If the event type is already in the accumulator, increment its count
    if (acc[event.type]) {
      acc[event.type].count += 1;
    } else {
      // Otherwise, add the event type to the accumulator with a count of 1
      acc[event.type] = {
        type: event.type,
        count: 1,
      };
    }

    return acc;
  }, {});

  // Convert the object to an array of objects for use with Recharts
  const dataForChart = Object.values(eventsForChart);

  return (
    <BarChart
      width={900}
      height={450}
      data={dataForChart}
      margin={{ bottom: 200 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="type"
        scale="point"
        interval={0}
        angle={-45}
        textAnchor="end"
      />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
