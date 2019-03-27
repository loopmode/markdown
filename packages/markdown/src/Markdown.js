import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import usePrism from '@loopmode/codeblock/lib/hooks/usePrism';
import useContent from './hooks/useContent';
import useRemarkable from './hooks/useRemarkable';
import fetchExternal from './utils/fetchExternal';

Markdown.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    loadExternal: PropTypes.func,
    src: PropTypes.string,
    boxed: PropTypes.bool,
    prismTheme: PropTypes.string,
    remarkableOptions: PropTypes.object
};

Markdown.defaultProps = {
    loadExternal: fetchExternal,
    prismTheme: 'prism',
    remarkableOptions: {}
};

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

export default function Markdown({
    children,
    src,
    loadExternal,
    className,
    boxed,
    prismTheme,
    remarkableOptions,
    ...props
}) {
    const ref = React.useRef(null);

    const content = useContent(children, src, loadExternal);

    const html = useRemarkable(content, remarkableOptions);

    usePrism(ref, { theme: prismTheme, isContainer: true });

    return (
        <Markdown.Styled
            {...props}
            ref={ref}
            className={cx('Markdown', className, { boxed })}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
