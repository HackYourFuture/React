import React from 'react';

//Component
import EditForm from './EditForm';
import DisplayForm from './DisplayForm';


export default class TodosItem extends React.Component {
  state = {
    isEditing: false,
  }
  componentDidMount() {
    this.setState({
      changedText: this.props.todo.description,
    })
  }
  handelEditItem = (event) => {
    this.setState({
      isEditing: !this.state.isEditing,
      changedText: this.props.todo.description,
    })
  }
  handleChange = (event) => {
    this.setState({
      changedText: event.target.value,
    });
  }
  handelSubmit = (event) => {
    event.preventDefault();
    this.setState({
      changedText: this.state.changedText,
      isEditing: !this.state.isEditing,
    })
  }

  handelCancel = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    const {
      todo,
      isDone,
      handelCheck,
      handelDeleteItem,
    } = this.props;
    return (
      <div>
        {
          this.state.isEditing ?
            
              <EditForm handelCancel={this.handelCancel}
                handleChange={this.handleChange}
                value={this.state.changedText}
                handelSubmit={this.handelSubmit}
              />
            :
            <DisplayForm todo={todo}
              description={this.state.changedText}
              isDone={isDone}
              handelCheck={handelCheck}
              handelDeleteItem={handelDeleteItem}
              handelEditItem={this.handelEditItem} />
        }
      </div>
    );
  }
}

