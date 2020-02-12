import PropTypes from 'prop-types';
import { emptyProviders } from '@codeblock/react/empty';

export const propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    loader: PropTypes.func,
    src: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    boxed: PropTypes.bool,
    prismPath: PropTypes.string,
    prismTheme: PropTypes.string,
    codeblockProviders: PropTypes.object,
    remarkableOptions: PropTypes.object
};

export const defaultProps = {
    children: undefined,
    loader: undefined,
    src: undefined,
    boxed: undefined,
    remarkableOptions: undefined,
    prismTheme: 'prism',
    codeblockProviders: emptyProviders
};
