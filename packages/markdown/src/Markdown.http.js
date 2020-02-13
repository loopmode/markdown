import React from 'react';
import PropTypes from 'prop-types';
import { setAutoload, getAutoload } from '@codeblock/core';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import { createHttpThemeProvider } from '@codeblock/themes/lib/utils/create-http-provider';

import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';
import { useHTTPProvider } from '@codeblock/react/lib/hooks';

MarkdownHTTP.propTypes = {
    prismPath: PropTypes.string.isRequired,
    ...propTypes
};
MarkdownHTTP.defaultProps = defaultProps;
export default function MarkdownHTTP(props) {
    const httpProviders = useHTTPProvider(props.prismPath);

    return (
        httpProviders && (
            <Markdown {...props} codeblockProviders={httpProviders} />
        )
    );
}
