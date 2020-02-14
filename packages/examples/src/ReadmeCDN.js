import React from "react";
import raw from "raw.macro";
import Markdown from "@loopmode/markdown/cdn";
import Codeblock from "@codeblock/react/cdn";
import Toggle from "./Toggle";

export default function ReadmeCDN() {
    return (
        <>
            <h1>CDN loading</h1>
            <p>Same, but loads prismjs themes and languages from a CDN</p>

            <Toggle>
                <Codeblock language="jsx">{raw("./ReadmeCDN.js")}</Codeblock>
            </Toggle>

            <h2>README.md</h2>
            <Markdown prismTheme="tomorrow" boxed>
                {raw("../../markdown/README.md")}
            </Markdown>
        </>
    );
}
