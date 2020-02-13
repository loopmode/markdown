import React from 'react';

import { setAutoload } from '@codeblock/core';
import staticLanguageProvider from '@codeblock/languages/lib/static';
import staticThemeProvider from '@codeblock/themes/lib/static';

import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownStatic.propTypes = propTypes;
MarkdownStatic.defaultProps = {
    ...defaultProps,
    codeblockProviders: {
        themes: staticThemeProvider,
        languages: staticLanguageProvider
    }
};
export default function MarkdownStatic(props) {
    React.useEffect(() => {
        setAutoload(null);
    }, []);
    return <Markdown {...props} />;
}
