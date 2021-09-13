import React from "react";
import { Menu } from "./components/menu/menu";
import { Translation } from "./components/translation/transaction";

export interface AppOptions {
    apiEndpoint: string,
};

export const App: React.FC<AppOptions> = ({ apiEndpoint }) => {
    return <div style={{
        display: "block",
        textAlign: "center"
    }}>
        <Menu />
        <Translation apiEndpoint={apiEndpoint} />
    </div>
};
