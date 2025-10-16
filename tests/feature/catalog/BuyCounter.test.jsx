import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import CatalogItem from "../../../src/feature/catalog/CatalogItem";
import { MemoryRouter } from "react-router";
import BuyCounter from "../../../src/feature/catalog/BuyCounter";
import userEvent from "@testing-library/user-event";

describe("BuyCounter component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("displays the current count", () => {
        const mockIncrement = vi.fn();
        const mockDecrement = vi.fn();
    
        render(
          <BuyCounter 
            count={5} 
            incrementCount={mockIncrement} 
            decrementCount={mockDecrement} 
          />
        );
    
        expect(screen.getByTestId("counter")).toHaveTextContent("5");
      });
    
    it("calls incrementCount when plus button is clicked", async () => {
        const user = userEvent.setup();
        const mockIncrement = vi.fn();
        const mockDecrement = vi.fn();

        render(
            <BuyCounter 
            count={1} 
            incrementCount={mockIncrement} 
            decrementCount={mockDecrement} 
            />
        );

        const plusButton = screen.getByRole("button", { name: "+" });
        await user.click(plusButton);

        expect(mockIncrement).toHaveBeenCalledTimes(1);
    });

    it("calls decrementCount when minus button is clicked", async () => {
        const user = userEvent.setup();
        const mockIncrement = vi.fn();
        const mockDecrement = vi.fn();

        render(
            <BuyCounter 
            count={2} 
            incrementCount={mockIncrement} 
            decrementCount={mockDecrement} 
            />
        );

        const minusButton = screen.getByRole("button", { name: "—" });
        await user.click(minusButton);

        expect(mockDecrement).toHaveBeenCalledTimes(1);
    });

    it("disables minus button when count is 1", () => {
        const mockIncrement = vi.fn();
        const mockDecrement = vi.fn();

        render(
            <BuyCounter 
            count={1} 
            incrementCount={mockIncrement} 
            decrementCount={mockDecrement} 
            />
        );

        const minusButton = screen.getByRole("button", { name: "—" });
        expect(minusButton).toBeDisabled();
    });
});
