import React from 'react';
import { staticProviders } from '@codeblock/react/static';
import Markdown from './Markdown';
import { propTypes, defaultProps } from './props';

MarkdownStatic.propTypes = propTypes;
MarkdownStatic.defaultProps = {
    ...defaultProps,
    codeblockProviders: staticProviders
};
export default function MarkdownStatic(props) {
    return <Markdown {...props} />;
}
