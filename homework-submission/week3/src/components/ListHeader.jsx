import React from 'react';

const ListHeader = (props) => {
    const { Title, className } = props;
    return <h1 className={className}>{Title}</h1>;
}

export default ListHeader;