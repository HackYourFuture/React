import React from "react";

const Checkbox = (props) => {
    const { className, defaultChecked } = props;
    <input type="checkbox" className={className} defaultChecked={defaultChecked} />
}

export default Checkbox;