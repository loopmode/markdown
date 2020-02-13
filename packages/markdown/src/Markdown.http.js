import React from 'react';
import PropTypes from 'prop-types';
import { setAutoload } from '@codeblock/core';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import { createHttpThemeProvider } from '@codeblock/themes/lib/utils/create-http-provider';

import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownHTTP.propTypes = {
    prismPath: PropTypes.string.isRequired,
    ...propTypes
};
MarkdownHTTP.defaultProps = defaultProps;
export default function MarkdownHTTP(props) {
    React.useEffect(() => {
        setAutoload(props.prismPath);
    }, [props.prismPath]);

    const httpProviders = React.useMemo(() => {
        return {
            languages: emptyLanguageProvider,
            themes: createHttpThemeProvider(props.prismPath)
        };
    }, [props.prismPath]);

    return <Markdown {...props} codeblockProviders={httpProviders} />;
}
