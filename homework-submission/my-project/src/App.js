class App extends Component {
  state = {
    editing: -1,
    data,
  };

  handleSubmit = newItem => {
    let newData = this.state.data;
    newData.push(newItem);
    this.setState({ data: newData });
  };
  handleChange = item => {
    let i = this.state.data.indexOf(item);
    data[i].done = !data[i].done;
    this.setState({ data });
  };
  handleUpdate = (updatedItem, item) => {
    let data = [...this.state.data];
    let i = data.indexOf(item);
    data[i].description = updatedItem.description;
    data[i].done = false;
    this.setState({ data, editing: -1 });
  };
  handleRemove = item => {
    let i = data.indexOf(item);
    data.splice(i, 1);
    this.setState({ data });
  };
  handleEdit = item => this.setState({ editing: data.indexOf(item) });
  handleCancel = () => this.setState({ editing: -1 });

  render() {
    const todos = this.state.data.map(item =>
      this.state.editing === data.indexOf(item) ? (
        <Edit
          item={item}
          key={item.id}
          onUpdate={this.handleUpdate}
          handleCancel={this.handleCancel}
        />
      ) : (
        <Todo
          item={item}
          key={item.id}
          handleChange={this.handleChange}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
      )
    );
    return (
      <div className="App">
        <Header />
        <AddForm onSubmit={this.handleSubmit} />
        {data.length === 0 ? 'No items...' : todos}
      </div>
    );
  }
}

export default App;
