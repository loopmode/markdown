import React from "react";
import raw from "raw.macro";
import Markdown from "@loopmode/markdown";

const ReadmeSource = raw("../../markdown/README.md");

export default function ThemedReadme() {
    return <Markdown prismTheme="okaidia">{ReadmeSource}</Markdown>;
}
