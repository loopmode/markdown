import React from 'react';

import { setAutoload } from '@codeblock/core';
import asyncLanguageProvider from '@codeblock/languages/lib/async';
import asyncThemeProvider from '@codeblock/themes/lib/async';

import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownAsync.propTypes = propTypes;
MarkdownAsync.defaultProps = {
    ...defaultProps,
    codeblockProviders: {
        themes: asyncThemeProvider,
        languages: asyncLanguageProvider
    }
};
export default function MarkdownAsync(props) {
    React.useEffect(() => {
        setAutoload(null);
    }, []);
    return <Markdown {...props} />;
}
