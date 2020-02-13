import React from 'react';
import PropTypes from 'prop-types';

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
