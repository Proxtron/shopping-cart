import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router"
import { routes } from "../../src/routes"
import Header from "../../src/layout/Header"

describe("Header component", () => {
    it("renders navigation links", () => {
    
        render(
        <MemoryRouter>
            <Header/>
        </MemoryRouter>
        );

        expect(screen.getByRole("link", {name: "Home"})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: "Catalog"})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: "Cart"})).toBeInTheDocument();
    });
})
