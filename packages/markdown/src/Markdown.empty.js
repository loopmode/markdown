import React from 'react';
import { staticProviders } from '@codeblock/react/static';
import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownStatic.propTypes = propTypes;
MarkdownStatic.defaultProps = defaultProps;
export default function MarkdownStatic(props) {
    return <Markdown codeblockProviders={staticProviders} {...props} />;
}
