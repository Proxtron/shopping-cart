import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router"
import { routes } from "../../../src/routes"

describe("HomePage component", () => {
    it("renders correctly", () => {
        const router = createMemoryRouter(routes, {initialEntries: ["/"]});

        const {container} = render(<RouterProvider router={router}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
})
