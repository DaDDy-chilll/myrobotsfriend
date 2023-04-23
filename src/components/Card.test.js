import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

it("expect to render Card Component", () => {
  expect(render(<Card />)).toMatchSnapshot();
});
