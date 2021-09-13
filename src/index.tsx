import React from "react";
import ReactDOM from "react-dom";
import { App, AppOptions } from "./App";

const options: AppOptions = {
    apiEndpoint: "https://seonbi.moreal.dev/"
};

ReactDOM.render(
    <React.StrictMode>
        <App {...options} />
    </React.StrictMode>,
    document.getElementById("root"));
