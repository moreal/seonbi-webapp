import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { Menu } from "./menu";
import { shallow } from "enzyme";

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
        const menu = shallow(<Menu />);
        expect(menu.html()).toMatchSnapshot();
    });

    it("should render", () => {
        const menu = shallow(<Menu />);

        expect(menu.text()).toBe("Seonbi");
    })
})
