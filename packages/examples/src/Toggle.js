/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Toggle({ title, children }) {
    const [visible, setVisible] = React.useState(false);
    const toggle = () => setVisible(!visible);
    return (
        <div>
            <button onClick={toggle}>{visible ? "hide" : "show"} example code</button>
            {visible && children}
        </div>
    );
}
