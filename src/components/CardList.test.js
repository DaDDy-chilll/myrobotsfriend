import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardList from "./CardList";

it("expect to render CardList Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "john Snow",
      username: "JohnJohn",
      email: "john@gmail.com",
    },
  ];
  expect(render(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
