# @loopmode/markdown

A react component for displaying markdown content with code highlighting.

Uses [react-remarkable](https://www.npmjs.com/package/react-remarkable) and [prismjs](https://npmjs.com/package/prismjs) (via [@loopmode/codeblock](https://npmjs.com/package/@loopmode/codeblock)) under the hood.

## Installation

```bash
yarn add @loopmode/markdown
# or via npm
npm install --save @loopmode/markdown
```

## Usage

- You can pass a string of markdown content directly via `children`.
- Alternatively, you can specify a `src` prop and have the content loaded from that URL
- You can change the prismjs theme by specifying the `prismTheme` prop.

### Inline content

_Note: Content provided via `children` should be of type `String`_

```jsx
import React from 'react';
import Markdown from '@loopmode/markdown';

export default function InlineContent() {
    return (
        <Markdown>{`
            ## Markdown via react-remarkable

            Provides all features of "react-remarkable", e.g. table rendering and git-flavored markdown.

            ## Syntax highlighing via prismjs

            Supports all prismjs languages, automatically applied to code-blocks defined with triple-backticks.

        `}</Markdown>
    );
}
```

### External content

_Note: Any `children` are ignored when you specify a `src` URL_

```jsx
import React from 'react';
import Markdown from '@loopmode/markdown';

export default function ExternalContent() {
    return (
        <Markdown src="https://raw.githubusercontent.com/facebook/react/master/README.md" />
    );
}
```

### Example: embedded README

Uses [raw.macro](https://www.npmjs.com/package/raw.macro) to embed the markdown and a dark-ish prismjs theme:

```jsx
import React from 'react';
import Markdown from '@loopmode/markdown';
import raw from 'raw.macro';
const ReadmeSource = raw('../../README.md');

export default function ThemedReadme() {
    return (
        <Markdown prismTheme="okaidia">
            {ReadmeSource}
        </Markdown>
    );
}

```

## Notes

- Requires react version 16.8.0 or newer (hooks support)
- Your project should support dynamic `import()` statements so that prismjs languages can be loaded on-demand
- You should not use multiple prismjs themes, because its global stylesheets will interfere with each other
- Auto-loading via `src` prop requires `window.fetch()`. For older browsers, provide a polyfill or a custom `loadExternal` function (e.g. using `axios`, `superagent`, etc)
