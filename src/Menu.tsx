import React from "react";

export const Menu: React.FC = () => {
    return <div style={{
        display: "flex",
        alignItems:"center",
        width: "auto",
        minHeight: "80px",
        borderWidth: 0,
        borderBottomWidth: "3px",
        borderColor: "black",
        borderStyle: "solid",
        margin: 0,
        // paddingTop: "20px",
        // paddingBottom: "0",
        paddingLeft: "40px",
    }}>
        <img src="icon.png" style={{ height: "40px", width: "40px" }}/>
        <span style={{ lineHeight: "40px" }}>Seonbi</span>
    </div>
}
