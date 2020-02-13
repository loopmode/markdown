import React from 'react';

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
    return <Markdown {...props} />;
}
