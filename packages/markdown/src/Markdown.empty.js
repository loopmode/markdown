import React from 'react';

import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import emptyThemeProvider from '@codeblock/themes/lib/empty';

import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownEmpty.propTypes = propTypes;
MarkdownEmpty.defaultProps = {
    ...defaultProps,
    codeblockProviders: {
        themes: emptyThemeProvider,
        languages: emptyLanguageProvider
    }
};
export default function MarkdownEmpty(props) {
    return <Markdown {...props} />;
}
