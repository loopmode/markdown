import React from 'react';
import Remarkable from 'remarkable';

export default function useRemarkable(source, options = {}) {
    const renderer = React.useMemo(() => {
        return new Remarkable(options);
    }, Object.values(options));

    const result = React.useMemo(() => {
        return renderer.render(source);
    }, [renderer, source]);

    return result;
}
