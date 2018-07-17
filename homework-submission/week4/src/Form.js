import React, {
    Component
} from "react";
class Form extends Component {
    render() {
        const { AddItems } = this.props;
        return (
            <form onSubmit={AddItems}>
                <input type="text" name="description" placeholder="Description" />
                <input type="date" name="deadline" placeholder="Deadline" />
                <input type="submit" name="add" value="Add" />
            </form>
        )
    }
}
export default Form;