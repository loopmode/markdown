import React from 'react';
import PropTypes from 'prop-types';

import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';
import { useHTTPProviders } from '@codeblock/react/lib/hooks';

MarkdownHTTP.propTypes = {
    prismPath: PropTypes.string.isRequired,
    ...propTypes
};
MarkdownHTTP.defaultProps = defaultProps;
export default function MarkdownHTTP(props) {
    const httpProviders = useHTTPProviders(props.prismPath);

    return (
        httpProviders && (
            <Markdown {...props} codeblockProviders={httpProviders} />
        )
    );
}
