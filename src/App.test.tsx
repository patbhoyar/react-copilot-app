import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App Component", () => {
  it('should display "Hello Docker!!!"', () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /Hello Docker!!!/ });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe("Hello Docker!!!");
  });

  it("should render the text in an h1 element", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe("Hello Docker!!!");
  });
});
