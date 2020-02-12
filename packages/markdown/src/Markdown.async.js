import React from 'react';
import { asyncProviders } from '@codeblock/react/async';
import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownAsync.propTypes = propTypes;
MarkdownAsync.defaultProps = {
    ...defaultProps,
    codeblockProviders: asyncProviders
};
export default function MarkdownAsync(props) {
    return <Markdown {...props} />;
}
