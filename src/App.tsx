import React from "react";
import { Menu } from "./Menu";
import { Translation } from "./Translation";

export const App: React.FC = () => {
    return <div style={{
        display: "block",
        textAlign: "center"
    }}>
        <Menu/>
        <Translation/>
    </div>
};
