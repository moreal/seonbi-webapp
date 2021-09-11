import React from "react";
import { Menu } from "./components/menu/menu";
import { Translation } from "./components/translation/transaction";

export const App: React.FC = () => {
    return <div style={{
        display: "block",
        textAlign: "center"
    }}>
        <Menu/>
        <Translation/>
    </div>
};
