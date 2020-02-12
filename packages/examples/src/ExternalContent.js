import React from "react";
import Markdown from "@loopmode/markdown/lib/Markdown.cdn";
import Codeblock from "@codeblock/react";
import raw from "raw.macro";

export default function ExternalContent() {
    return (
        <>
            <h1>External content example</h1>
            <p>
                In this example, we load the markdown directly via{" "}
                <code>src</code> attribute
            </p>
            <h2>Example code:</h2>
            <Codeblock language="jsx" theme="tomorrow">{raw("./ExternalContent.js")}</Codeblock>
            <h2>External markdown:</h2>
            <Markdown src="https://raw.githubusercontent.com/loopmode/markdown/master/packages/markdown/README.md" />
        </>
    );
}
