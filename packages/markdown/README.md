# @loopmode/markdown

A react component for displaying markdown content with code highlighting.

Uses [react-remarkable](https://www.npmjs.com/package/react-remarkable) and [prismjs](https://npmjs.com/package/prismjs) (via [@codeblock/react](https://codeblockjs.github.io/codeblock)) under the hood.

Any code blocks in the markdown content will have syntax highlighting applied.

## Installation

```bash
yarn add @loopmode/markdown
# or via npm
npm install --save @loopmode/markdown
```

## Usage

- You can pass a string of markdown content directly via `children`.
- Alternatively, you can specify a `src` prop and have the content loaded from that URL
- Pass options for `remarkable` with the `remarkableOptions` prop
- Pass providers for [`@codeblock/react`](https://www.npmjs.com/package/@codeblock/react) with the `codeblockProviders` props
- You can change the prismjs theme used by codeblock with the `prismTheme` prop

### Inline content

_Note: The `children` value should be a `String`_

```jsx
import React from 'react';
import Markdown from '@loopmode/markdown';

export default function InlineContent() {
    return (
        <>
            <Markdown>{'# Yay markdown!'}</Markdown>
            <Markdown children={'# Yay markdown!'} />
            <Markdown>{'
            # Yay markdown!
            ## works
            '}
            </Markdown>
        </>
    );
}
```

### External content

If you specify `src`, the content will be loaded from that URL and the `children` prop is ignored.

```jsx
import React from 'react';
import Markdown from '@loopmode/markdown';

export default function ExternalContent() {
    return (
        <Markdown
            children="# Nope. Ignored."
            src="https://raw.githubusercontent.com/facebook/react/master/README.md"
        />
    );
}
```

### Example: embedded README

Uses [raw.macro](https://www.npmjs.com/package/raw.macro) to embed the contents of a local markdown file and renders it, using a dark theme for syntax highlighing:


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

_Note: `raw.macro` is pretty cool - you can embed files from outside the `src` folder!_

### window.fetch and custom loader

Auto-loading content via `src` uses `window.fetch()` by default.
If you need to support older browsers, you can either provide a fetch polyfill or a custom `loader` function.

A custom `loader` function is pretty easy to create:

```javascript
const loader = (url, callback) => {
    axios.get(url)
        .then(response => callback(response.data));
}
```

- The signature is `(url: String, callback: Function): Function`
- Invoke the callback with the result string once you have it
- Optionally return a function

The loader may return a function to cancel pending requests when the requesting component gets unmounted.
For example, using axios, it would be something like [this](https://github.com/axios/axios#cancellation):

```javascript
const loader = (url, callback) => {
    const {token: cancelToken, cancel} = axios.CancelToken.source();
    axios.get(url, {cancelToken})
        .then(response => callback(response.data));
    return cancel
}
```

## Requirements

- Requires react version 16.8.6 or newer (hooks support)
- Your project should support dynamic `import()` statements so that prismjs languages can be loaded on-demand
- You should not use multiple prismjs themes, because its global stylesheets will interfere with each other
