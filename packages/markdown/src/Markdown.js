import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';

import useContent from '@loopmode/use-content';
import useRemarkable from './hooks/useRemarkable';
import { propTypes, defaultProps } from './props';
import { usePrism } from '@codeblock/react/lib/hooks';

Markdown.Styled = styled.div`
    table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }
    table td,
    table th {
        padding: 5px;
        border-bottom: 1px solid #eee;
    }
    table thead th {
        border-bottom: 1px solid #ccc;
    }

    &.boxed {
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }
`;

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

export default function Markdown(props) {
    const ref = React.useRef(null);

    const content = useContent(props.children, props);

    const html = useRemarkable(content, props.remarkableOptions);

    const { themeClassName } = usePrism(ref, {
        providers: props.codeblockProviders,
        theme: props.prismTheme,
        children: html
    });

    return (
        <Markdown.Styled
            {...getForeignProps(props)}
            ref={ref}
            key={html}
            className={cx('Markdown', props.className, themeClassName, {
                boxed: props.boxed
            })}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

function getForeignProps(props) {
    const ownKeys = Object.keys(Markdown.defaultProps);
    return Object.entries(props).reduce((result, [key, value]) => {
        if (ownKeys.includes(key)) {
            return result;
        }
        return Object.assign(result, { [key]: value });
    }, {});
}
