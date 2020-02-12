import React from "react";
import raw from "raw.macro";
import Markdown from "@loopmode/markdown";

const ReadmeSource = raw("../../markdown/README.md");

export default function ThemedReadme() {
    return (
        <>
            <h1>README.md</h1>
            <p>
                This example simply displays the README.md file of the main
                package, embedded using{" "}
                <a
                    href="https://www.npmjs.com/package/raw.macro"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    raw.macro
                </a>
                .
            </p>

            <Markdown boxed>
                {ReadmeSource}
            </Markdown>
        </>
    );
}
