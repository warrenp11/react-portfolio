import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  it("renders", () => {
    render(<Nav />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Test for Link Visibility
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("My React Portfolio");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
