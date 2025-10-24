import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "../../../src/routes";
import { vi } from "vitest";

const mockUseOutletContext = vi.hoisted(() => vi.fn());

// Mock the hook
vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");
    return {
        ...actual,
        useOutletContext: mockUseOutletContext
    };
});

describe("CartPage component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    })

    it("renders Shopping Cart when item count > 0", () => {
        mockUseOutletContext.mockReturnValue({
            itemsInCart: [],
            numberInCart: 5,
            updateItemCount: vi.fn()
        });
        const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });

        render(<RouterProvider router={router} />);

        expect(screen.getByRole("heading", { name: "Shopping Cart" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Order Summary" })).toBeInTheDocument();
    });

    it("renders an empty message when shopping cart item count is 0", () => {
        mockUseOutletContext.mockReturnValue({numberInCart: 0});
        const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });

        render(<RouterProvider router={router} />);

        expect(
        screen.getByRole("heading", {
            name: `Looks like your shopping cart is empty! Head to the catalog page`,
        })
        ).toBeInTheDocument();
    });

    it("displays the 5 item(s) heading when numberInCart is 5", () => {
        mockUseOutletContext.mockReturnValue({
            itemsInCart: [],
            numberInCart: 5,
            updateItemCount: vi.fn()
        });
        const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });

        render(<RouterProvider router={router} />);

        expect(
        screen.getByRole("heading", {name: "5 item(s)"})).toBeInTheDocument();
    })

    it("displays 2 cart items sections with 2 different cart items", () => {
        mockUseOutletContext.mockReturnValue({
            itemsInCart: [
                {id: 1, title:"", price:"", imageUrl: null, amount: 1},
                {id: 2, title:"", price:"", imageUrl: null, amount: 1}
            ],
            numberInCart: 2,
            updateItemCount: vi.fn()
        });
        const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });

        render(<RouterProvider router={router} />);

        expect(screen.getAllByTestId("cartItem").length).toBe(2);
    });
});
