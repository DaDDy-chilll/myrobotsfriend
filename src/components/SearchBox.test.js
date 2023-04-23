import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from "./SearchBox";

it("expect to render SearchBox component", () => {
  expect(render(<SearchBox />)).toMatchSnapshot();
});
