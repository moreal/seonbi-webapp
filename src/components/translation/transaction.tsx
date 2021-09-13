import axios from "axios";
import React, { CSSProperties, useEffect, useState } from "react";

export const Translation: React.FC = () => {
    const [translationSource, setTranslationSource] = useState<string>(() => decodeURI(new URLSearchParams(location.search).get("text") ?? ""));
    const [translated, setTranslated] = useState<string>(translationSource);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        if (translationSource === "") {
            urlSearchParams.delete("text")
        } else {
            urlSearchParams.set("text", encodeURI(translationSource));
        }

        const urlSearchParamsString = urlSearchParams.toString();
        if (urlSearchParamsString === "") {
            window.history.pushState(null, "", "");
        } else {
            window.history.replaceState(null, "", "?" + urlSearchParamsString);
        }
    }, [translationSource]);

    const textareaStyle: CSSProperties = {
        width: "400px",
        height: "300px"
    };

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Host", "https://seonbi.moreal.dev/");
        axios.post("https://seonbi.moreal.dev/", {
            "sourceHtml": translationSource,
            "preset": "ko-kr",
        }, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(({ data }) => {
            setTranslated(data.resultHtml)
        });
    }, [translationSource])

    return <div style={{
        marginTop: "50px",
    }}>
        <textarea style={textareaStyle} onChange={event => {
            setTranslationSource(event.currentTarget.value);
        }} value={translationSource} />
        <textarea readOnly style={textareaStyle} value={translated} />
    </div>
}
