import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router"
import { routes } from "../../../src/routes"

describe("HomePage component", () => {
    it("renders home page content", () => {
        const router = createMemoryRouter(routes, {initialEntries: ["/"]});

        render(<RouterProvider router={router}/>);
        expect(screen.getByText("Hello from the home page")).toBeInTheDocument();
    });
})
