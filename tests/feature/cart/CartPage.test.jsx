import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import CartPage from "../../../src/feature/cart/CartPage"
import { createMemoryRouter, RouterProvider } from "react-router"
import App from "../../../src/App"
import { routes } from "../../../src/routes"

describe("CartPage component", () => {
    it("renders cart page content", () => {
        const router = createMemoryRouter(routes, {initialEntries: ["/cart"]});

        render(<RouterProvider router={router}/>);
        expect(screen.getByText("Hello from the cart page")).toBeInTheDocument();
    });
})
