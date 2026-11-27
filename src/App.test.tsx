import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App Component", () => {
  it('should display "Hello World!!!!"', () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /Hello World!!!!/ });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe("Hello World!!!!");
  });

  it("should render the text in an h1 element", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe("Hello World!!!!");
  });

  it("should navigate between the about, profile, and portfolio routes", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("link", { name: "About" }));
    expect(screen.getByRole("heading", { name: "About me" })).toBeTruthy();

    fireEvent.click(screen.getByRole("link", { name: "Profile" }));
    expect(screen.getByRole("heading", { name: "Profile" })).toBeTruthy();

    fireEvent.click(screen.getByRole("link", { name: "Portfolio" }));
    expect(screen.getByRole("heading", { name: "Portfolio" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Daily Notes" })).toBeTruthy();
  });
});
