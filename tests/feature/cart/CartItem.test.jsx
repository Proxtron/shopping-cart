import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CartItem from "../../../src/feature/cart/CartItem";

describe("CartItem component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    })

    it("renders image, title, price, amount correctly", () => {
        const mockProps = {
            id: 1,
            title: "Test Item",
            price: "$19",
            imageUrl: null,
            amount: 2,
            updateItemCount: vi.fn()
        };

        render(<CartItem {...mockProps}/>);

        expect(screen.getByText("Test Item")).toBeInTheDocument();
        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByText("$19")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
    });

});
