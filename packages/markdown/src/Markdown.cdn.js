import React from 'react';
import PropTypes from 'prop-types';

import MarkdownHTTP from './Markdown.http';
import { propTypes, defaultProps } from './props';
import { CDN_AUTOLOAD_PATH } from '@codeblock/core';

MarkdownCDN.propTypes = {
    prismPath: PropTypes.string,
    ...propTypes
};
MarkdownCDN.defaultProps = { ...defaultProps, prismPath: CDN_AUTOLOAD_PATH };
export default function MarkdownCDN(props) {
    return <MarkdownHTTP {...props} />;
}
