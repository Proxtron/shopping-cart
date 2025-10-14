import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CatalogPage from "../../../src/feature/catalog/CatalogPage";

describe("CatalogPage component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correct number of CatalogItems", async () => {
    const mockData = [
      { id: 1, title: "Test Product 1", price: "$10", imageUrl: "test1.jpg" },
      { id: 2, title: "Test Product 2", price: "$20", imageUrl: "test2.jpg" },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>
    );

    // Wait for the async fetch to complete and data to render
    await waitFor(() => {
        expect(screen.getAllByRole("img")).toHaveLength(2);
        expect(screen.getAllByRole("heading", {level: 2})).toHaveLength(2);
    });
  });

  it("displays Loading message while waiting for data", async () => {
    global.fetch = vi.fn(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: () =>
              Promise.resolve([
                { id: 1, title: "Test", price: "$10", imageUrl: "test.jpg" },
              ]),
          });
        }, 100);
      });
    });

    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>
    );

    // Show loading initially
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
    }); 
  });

  it("handles fetch errors gracefully", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("Network error")));

    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>
    );

    // Wait for the error to be displayed
    await waitFor(() => {
        expect(
            screen.getByText(
            "An error occured when retrieving catalog data: Network error"
            )
        ).toBeInTheDocument();

        // Should not render any products (empty array)
        expect(screen.queryByText("Test Product")).not.toBeInTheDocument();
    });
  });

  it("handles HTTP errors gracefully", async () => {
    global.fetch = vi.fn(() => {
        return Promise.resolve({
            ok: false,
            statusText: "404 Not Found",
            json: () => {}
        });
    });

    render(
        <MemoryRouter>
            <CatalogPage/>
        </MemoryRouter>
    );

    await waitFor(() => {
        expect(screen.getByText("An error occured when retrieving catalog data: 404 Not Found"));
    });
  });
});
