import useExternalContent from './useExternalContent';

export default function useContent(children, src, loadExternal) {
    if (src) {
        return useExternalContent(src, loadExternal);
    }
    return children;
}
