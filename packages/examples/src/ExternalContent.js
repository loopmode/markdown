import React from "react";
import Markdown from "@loopmode/markdown";

export default function ExternalContent() {
    return (
        <Markdown
            prismTheme="okaidia"
            src="https://raw.githubusercontent.com/facebook/react/master/README.md"
        />
    );
}
