import React from "react";
import raw from "raw.macro";
import Markdown from "@loopmode/markdown";
import Codeblock from "@codeblock/react";
import Toggle from "./Toggle";

export default function Readme() {
    return (
        <>
            <h1>Embedded content</h1>
            <p>An example that embeds and displays the README.md file.</p>

            <Toggle>
                <Codeblock language="jsx">{raw("./Readme.js")}</Codeblock>
            </Toggle>

            <h2>README.md</h2>
            <Markdown boxed>{raw("../../markdown/README.md")}</Markdown>
        </>
    );
}
