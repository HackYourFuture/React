import React, { memo } from "react";

const Item = memo(props => (
    <li data-id={props.id}>
        <div aria-label='Check'>
            <input type="checkbox" onClick={props.onCheckBox} />
        </div>

        <div aria-label='Delete'>
            <button onClick={props.onButtonDelete} />
        </div>

        <div aria-label='Edit'>
            <p onClick={props.onEdit}>{props.name}</p>
        </div>
    </li>

))

export default Item;
