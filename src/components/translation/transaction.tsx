import axios from "axios";
import React, { CSSProperties, useEffect, useState } from "react";
import { decode } from "html-entities";

export interface TranslationOptions {
    apiEndpoint: string,
};

export const Translation: React.FC<TranslationOptions> = ({ apiEndpoint }) => {
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
        width: "50%",
        maxWidth: "50%",
        height: "300px"
    };

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Host", apiEndpoint);
        axios.post(apiEndpoint, {
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
        display: "flex",
        justifyContent: "center"
    }}>
        <textarea style={textareaStyle} onChange={event => {
            setTranslationSource(event.currentTarget.value);
        }} value={translationSource} />
        <div style={{
            width: "50%",
            maxWidth: "50%",
            display: "block",
            overflowWrap: "break-word",
        }}>
            {decode(translated, { level: "html5" })}
        </div>
    </div>
}
