import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

// Gallery component requires a prop of currentCategory
const Projects = {
  name: "projects",
  description: "Links to projects I've created as a web developer",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
  it("renders", () => {
    render(<Gallery currentCategory={Projects} />);
  });

  // make sure the gallery matches its snapshot
  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={Projects} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // make sure that the title of our <h1> is Projects
  it("h1 title match", () => {
    const { getByTestId } = render(<Gallery currentCategory={Projects} />);
    expect(getByTestId("h1tag")).toHaveTextContent("Projects");
  });
});
