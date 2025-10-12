import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router"
import { routes } from "../../../src/routes"

describe("CatalogPage component", () => {
    it("renders catalog page content", () => {
        const router = createMemoryRouter(routes, {initialEntries: ["/catalog"]});

        render(<RouterProvider router={router}/>);
        expect(screen.getByText("Hello from the catalog page")).toBeInTheDocument();
    });
})
