import React from "react";

const ListHeader = (props) => {
    const { Title, className } = props;
    return (
        <header className="App-header">
            <img
                src="https://russellinvestments.com/-/media/images/au/tiles/todolist.png"
                className="App-logo"
                alt="logo"
            />
            <h1 className={className}>{Title}</h1>
        </header>
    );
}

export default ListHeader;