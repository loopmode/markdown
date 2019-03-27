import styled from 'styled-components';

export default styled.div`
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    margin-bottom: 50px;
    img {
        background: #eee;
    }
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

    h1:not(:first-child),
    h2:not(:first-child),
    h3:not(:first-child) {
        margin-top: 40px;
    }

    h4:not(:first-child),
    h5:not(:first-child),
    h6:not(:first-child) {
        margin-top: 20px;
    }
`;
