/*
1. Needed for React compatibility
2. Needed to render DOM and then cleanup to prevent memory leaks
3. Needed for custom matchers 
*/
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// cleans up virtual DOM after each test
afterEach(cleanup);

// string declares what's happening. Callback performs action
describe("About component", () => {
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
