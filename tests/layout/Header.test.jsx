import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import userEvent from "@testing-library/user-event"
import Header from "../../src/layout/Header"
import styles from "../../src/layout/Header.module.css"

describe("Header component", () => {
    it("renders 3 navigation links", () => {
    
        render(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        );

        expect(screen.getAllByRole("link").length).toBe(3);
    });

    it("shows catalog link as underlined when clicked on", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        );

        const catalogLink = screen.getByRole("link", {name: "Catalog"});

        await user.click(catalogLink);

        expect(catalogLink.classList.contains(styles.underlined)).toBe(true);
    });

    it("shows cart link as underlined when clicked on", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        );

        const cartLink = screen.getByRole("link", {name: "Navigate to Cart Page"});

        await user.click(cartLink);

        expect(cartLink.classList.contains(styles.underlined)).toBe(true);
    });
})
