import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import CatalogItemPage from "../../../src/feature/catalog/CatalogItemPage";
import { MemoryRouter, Routes, Route } from "react-router";

describe("CatalogItemPage component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("displays CatalogItem info on a successful fetch", async () => {
        const mockItem = {title: "Item", price: "$10", imageUrl: "url"}
        global.fetch = vi.fn(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockItem),
            })
        })

        render(
          <MemoryRouter initialEntries={["/catalog/123"]}>
          <Routes>
              <Route path="/catalog/:catalogItemId" element={<CatalogItemPage />} />
          </Routes>
          </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText(mockItem.title)).toBeInTheDocument();
            expect(screen.getByText(mockItem.price)).toBeInTheDocument();
            expect(screen.getByRole("img").src).toContain("url");
        });
    });

    it("shows loading state initially", () => {
        global.fetch = vi.fn(() => {
          // Return a promise that never resolves to keep loading state
          return new Promise(() => {});
        });
    
        render(
          <MemoryRouter initialEntries={["/catalog/123"]}>
            <Routes>
              <Route path="/catalog/:catalogItemId" element={<CatalogItemPage />} />
            </Routes>
          </MemoryRouter>
        );
    
        // Component shows empty h1 initially (since catalogItemData.title is undefined)
        expect(screen.getByRole("heading", {name: "Loading..."})).toBeInTheDocument();
      });
    
      it("handles fetch errors", async () => {
        global.fetch = vi.fn(() =>
          Promise.resolve({
            ok: false,
            statusText: "Not Found"
          })
        );
    
        render(
          <MemoryRouter initialEntries={["/catalog/123"]}>
            <Routes>
              <Route path="/catalog/:catalogItemId" element={<CatalogItemPage />} />
            </Routes>
          </MemoryRouter>
        );
    
        await waitFor(() => {
          const heading = screen.getByRole("heading");
          expect(heading.textContent).toBe("An error occured when retrieving catalog data: Not Found"); // Empty because title is undefined
        });
      });
});
