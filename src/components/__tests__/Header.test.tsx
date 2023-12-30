import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

describe("Header", () => {
  it("should render the text passed in props", () => {
    const { container } = render(<Header text="Site" />);

    const title = container.querySelector("h1");

    expect(title).toHaveTextContent("Site");
    expect(screen.getByRole("heading")).toContainElement(title);
  });
});
