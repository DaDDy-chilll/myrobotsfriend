import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundry from "./ErrorBoundry";

it("expect to render ErrorBoundry component", () => {
  console.log(render(<ErrorBoundry />));
});
