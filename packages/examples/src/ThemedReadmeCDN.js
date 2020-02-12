import React from "react";
import raw from "raw.macro";
import Markdown from "@loopmode/markdown/cdn";

const ReadmeSource = raw("../../markdown/README.md");

export default function ThemedReadmeCDN() {
    return (
        <>
            <h1>README.md</h1>
            <p>
                This is same as the ThemedReadme example, but it loads
                {' '}<code>codeblock</code>/<code>prismjs</code> dependencies from a CDN.
                <br />Also, it uses a different <code>prismTheme</code>
            </p>

            <Markdown prismTheme="twilight" boxed>
                {ReadmeSource}
            </Markdown>
        </>
    );
}
