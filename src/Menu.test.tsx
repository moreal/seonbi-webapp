import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { Menu } from "./Menu";

let root: HTMLDivElement | null = null;

beforeEach(() => {
    root = document.createElement("div");
    document.body.appendChild(root);
});

afterEach(() => {
    if (root !== null) {
        unmountComponentAtNode(root);
        root.remove();
        root = null;
    }
});

describe("Menu", () => {
    it("snapshot", () => {
        const container: HTMLDivElement = root!;
        act(() => {
            render(<Menu />, container);
        });

        expect(container).toMatchSnapshot();
    });

    it("should render", () => {
        const container: HTMLDivElement = root!;
        act(() => {
            render(<Menu />, container);
        })

        expect(container.querySelector("img")?.src).toBe("icon.png");
        expect(container.textContent).toBe("Seonbi");
    })
})
