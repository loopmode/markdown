import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import usePrism from '@loopmode/codeblock/lib/hooks/usePrism';
import useContent from '@loopmode/use-content';
import useRemarkable from './hooks/useRemarkable';

Markdown.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    loader: PropTypes.func,
    src: PropTypes.string,
    boxed: PropTypes.bool,
    prismTheme: PropTypes.string,
    remarkableOptions: PropTypes.object
};

Markdown.defaultProps = {
    loader: undefined,
    src: undefined,
    boxed: undefined,
    prismTheme: undefined,
    remarkableOptions: undefined
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

export default function Markdown(props) {
    const ref = React.useRef(null);

    const content = useContent(props.children, props);

    const html = useRemarkable(content, props.remarkableOptions);

    usePrism(ref, { theme: props.prismTheme, isContainer: true });

    return (
        <Markdown.Styled
            {...getForeignProps(props)}
            ref={ref}
            className={cx('Markdown', props.className, { boxed: props.boxed })}
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
