import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import CatalogItem from "../../../src/feature/catalog/CatalogItem";
import { MemoryRouter } from "react-router";
import BuyCounter from "../../../src/feature/catalog/BuyCounter";

describe("BuyCounter component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders correctly with count=1", () => {
        const mockFn = vi.fn(() => {});
        render(<BuyCounter count={1} incrementCount={mockFn} decrementCount={mockFn}/>);

        expect(screen.getByRole("button", {name: "—"})).toBeDisabled();
        expect(screen.getByRole("button", {name: "+"})).toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("renders correctly with count>1", () => {
        const mockFn = vi.fn();
        render(<BuyCounter count={2} incrementCount={mockFn} decrementCount={mockFn}/>);

        expect(screen.getByRole("button", {name: "—"})).not.toBeDisabled();
        expect(screen.getByRole("button", {name: "+"})).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
    });
});
