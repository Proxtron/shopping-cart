import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router"
import { routes } from "../src/routes"

describe("App component", () => {
    it("renders the header component", () => {
        const router = createMemoryRouter(routes, {initialEntries: ["/"]});
        render(<RouterProvider router={router}/>);

        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("renders the main element", () => {
        const router = createMemoryRouter(routes, {initialEntries: ["/"]});
        render(<RouterProvider router={router}/>);

        expect(screen.getByRole("main")).toBeInTheDocument();
    });
})
