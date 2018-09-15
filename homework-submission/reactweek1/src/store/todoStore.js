import { observable, action ,configure} from 'mobx';
configure({ enforceActions: "observed" });

class todoStore {
  @observable list = [
    {
      id: 1,
      description: "Get out of bed",
      deadLine: "2017-09-11",
      done: true
    },
    {
      id: 2,
      description: "Brush teeth",
      deadLine: "2017-09-10",
      done: false
    },
    {
      id: 3,
      description: "Eat breakfast",
      deadLine: "2017-09-09",
      done: false
    }
  ]

  @observable newField = {
  newDescription: "",
  newDeadLine: ""
  }

  @action descriptionHandler = newDescription => {
    this.newField.newDescription = newDescription
  };

  @action deadLineHandler = newDeadLine => {
    this.newField.newDeadLine = newDeadLine
  };

  @action addHandler = () => {
    const newItem = {
      id: this.list[this.list.length - 1].id + 1,
      description: this.newField.newDescription,
      deadLine: this.newField.newDeadLine,
      done: false
    };
    this.list.push(newItem);
  };


  @action removeHandler = id => {
    const updatedList = this.list.filter(prop => prop.id !== id);
    this.list = updatedList;
  };

  @action changeToDone = event => {
    const id = event.target.id;
    const itemIndex = this.list.findIndex(el => {
      return el.id === Number(id);
    });
    this.list[itemIndex].done = !this.list[itemIndex].done;
  };

}

export default new todoStore();