import React from "react";
import { render, screen } from "@testing-library/react";
import City from "../City";

const MockCity = () => {
  const data = [
    {
      coord: {
        lon: 4.89,
        lat: 52.37,
      },
      weather: [
        {
          main: "Clouds",
          description: "few clouds",
        },
      ],

      main: {
        temp_min: 278.71,
        temp_max: 281.48,
      },

      sys: {
        country: "NL",
      },

      id: 2759794,
      name: "Amsterdam",
    },
  ];
  return (
    <div>{data?.length > 0 && <City aria-label="city" data={data} />}</div>
  );
};

test("City is in the document", async () => {
  render(<MockCity />);
  const headerElement = await screen.findByTestId("city-element-0");
  expect(headerElement).toBeInTheDocument();
});
