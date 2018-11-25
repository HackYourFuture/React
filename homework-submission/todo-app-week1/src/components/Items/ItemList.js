import React, { memo } from 'react';
import Item from './Item'
const ItemList = memo(props => (
    <ul className="list" data-area>
        {props.items.map((item, index) => (
            <Item
                {...item}
                key={item.id}
                onCheckBox={props.checkItem(index)}
                onButtonDelete={() => props.deleteItem(index)}
                onEdit={() => props.editItem(index)}
            />
        ))}
    </ul>
))

export default ItemList