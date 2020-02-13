import React from 'react';
import PropTypes from 'prop-types';
import { CDN_AUTOLOAD_PATH } from '@codeblock/core';

import MarkdownHTTP from './Markdown.http';
import { propTypes, defaultProps } from './props';

MarkdownCDN.propTypes = {
    prismPath: PropTypes.string,
    ...propTypes
};
MarkdownCDN.defaultProps = { ...defaultProps, prismPath: CDN_AUTOLOAD_PATH };
export default function MarkdownCDN(props) {
    return <MarkdownHTTP {...props} />;
}
