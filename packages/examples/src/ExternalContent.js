import React from "react";
import Markdown from "@loopmode/markdown/lib/Markdown.cdn";
import Codeblock from "@codeblock/react/cdn";
import raw from "raw.macro";
import Toggle from "./Toggle";

export default function ExternalContent() {
    return (
        <>
            <h1>External content</h1>
            <p>
                Loads content using the <code>src</code> attribute
            </p>

            <Toggle>
                <Codeblock language="jsx">
                    {raw("./ExternalContent.js")}
                </Codeblock>
            </Toggle>

            <h2>External markdown:</h2>
            <Markdown
                prismTheme="solarizedlight"
                src="https://raw.githubusercontent.com/loopmode/markdown/master/packages/markdown/README.md"
            />
        </>
    );
}
