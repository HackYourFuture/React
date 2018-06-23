import React from "react";

const TaskAndDate = ({ description, deadline }) =>
    <div>
        <li>{description}<br />{deadline}</li>
    </div>

export default TaskAndDate;