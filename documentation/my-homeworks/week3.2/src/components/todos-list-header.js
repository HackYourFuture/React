import React from 'react';

export default class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
}
