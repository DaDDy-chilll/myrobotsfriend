import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scroll from "./Scroll";

it("expect to render Scroll Component", () => {
  expect(render(<Scroll />)).toMatchSnapshot();
});
