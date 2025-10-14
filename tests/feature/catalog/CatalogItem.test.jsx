import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import CatalogItem from "../../../src/feature/catalog/CatalogItem";

describe("CatalogItem component", () => {
  it("renders catalog item correctly", () => {
    const mockProps = {
        title: "Test Product",
        price: "$10",
        imageUrl: "test.jpg"
    };

    render(<CatalogItem {...mockProps}/>);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
