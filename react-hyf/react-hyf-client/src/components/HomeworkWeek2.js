import React from 'react';

const ListItem = ({ id, description, deadline, clickHandler, className }) => {
  return (
    <li key={id} id={id} onClick={clickHandler} className={className}>
      {description} , {deadline}
    </li>
  );
};

const Button = ({ type, text, className }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

const DynamicList = ({ list, clickHandler, className }) => {
  return (
    <div className="list">
      {list.map(item => {
        return (
          <ListItem
            clickHandler={clickHandler}
            key={item.id}
            id={item.id}
            description={item.description}
            deadline={item.deadline}
            className={className}
          />
        );
      })}
    </div>
  );
};

const AddingListItem = ({ submitHandler }) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="listItem" defaultValue={'Do something , ' + today} />
      <Button type="submit" text="Add Item" className="addItem" />
    </form>
  );
};

class HomeworkWeek2 extends React.Component {
  state = {
    todoList: [
      {
        id: 0,
        description: 'Get out of bed',
        deadline: '2017-09-11',
      },
      {
        id: 1,
        description: 'Brush teeth',
        deadline: '2017-09-10',
      },
      {
        id: 2,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
      },
    ],
  };

  addItem = event => {
    event.preventDefault();
    const list = this.state.todoList;
    const copyList = [...list];
    const value = event.target.listItem.value;
    const splitedValue = value.split(',');
    let description = splitedValue[0];
    let deadline = splitedValue[1];
    let idItem = 0;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const { descriptionValidation, deadlineValidation } = this.validator(description, deadline);
    if (!deadlineValidation) deadline = today;
    if (!descriptionValidation) description = 'Do something';

    if (list.length !== 0) {
      idItem = list[list.length - 1].id + 1;
    }

    copyList.push({
      id: idItem,
      description: description,
      deadline: deadline,
    });

    this.setState({
      todoList: copyList,
    });
  };

  validator = (description, deadline) => {
    const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    let deadlineValidation = true;
    let descriptionValidation = true;

    if (deadline === '' || deadline === null || deadline === undefined || !regex.test(deadline))
      deadlineValidation = false;

    if (description === '' || description === null || description === undefined)
      descriptionValidation = false;

    return { descriptionValidation, deadlineValidation };
  };

  removeItem = event => {
    const idToRemove = event.target.id;
    const { todoList } = this.state;
    const newList = todoList.filter(item => item.id !== Number(idToRemove));
    newList.forEach((item, index) => {
      item.id = index;
    });
    this.setState({ todoList: newList });
  };

  render() {
    return (
      <div className="wrapper">
        <AddingListItem submitHandler={this.addItem} />
        <DynamicList
          list={this.state.todoList}
          clickHandler={this.removeItem}
          className="listItem"
        />
      </div>
    );
  }
}

export default HomeworkWeek2;
