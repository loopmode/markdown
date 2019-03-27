import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Remarkable from 'react-remarkable';
import usePrism from '@loopmode/codeblock/lib/hooks/usePrism';
import useContent from './hooks/useContent';
import fetchExternal from './utils/fetchExternal';

import StyledContainer from './Markdown.styled';

Markdown.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    prismTheme: PropTypes.string,
    loadExternal: PropTypes.func,
    src: PropTypes.string
};
Markdown.defaultProps = {
    loadExternal: fetchExternal
};

export default function Markdown({
    children,
    src,
    loadExternal,
    className,
    prismTheme: theme = 'prism',
    ...props
}) {
    const ref = React.useRef(null);

    usePrism(ref, { theme, isContainer: true });

    return (
        <StyledContainer className={cx('Markdown', className)} ref={ref}>
            <Remarkable
                {...props}
                children={useContent(children, src, loadExternal)}
            />
        </StyledContainer>
    );
}
