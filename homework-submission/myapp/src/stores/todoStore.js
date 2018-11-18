import { observable, action } from "mobx";
import Data from "./../data/data";
import moment from "moment";

class todoStore {
  @observable Data = Data;
  @observable Info = {
    name: "",
    deadline: moment()
  };

  @action handleCheck = id => {
    const newData = this.Data.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    this.Data = newData;
  };

  @action handleRemove = id => {
    function filterByID(item) {
      if (item.id !== id) {
        return true;
      }
      return false;
    }

    const deletedData = this.Data.filter(filterByID);
    this.Data = deletedData;
  };

  @action handleAdd = (name, deadline) => {
    const newId = this.Data.length;
    const addition = {
      id: newId,
      name,
      deadline,
      done: false
    };
    this.Data = [...this.Data, addition];
  };

  @action handleChangeForm =  value  => {
    this.Data = { name: value };
  };

  @action handleChangeDate = date => {
    this.Data = { deadline: date };
  };

  @action handleSubmitAdd = event => {
    // event.preventDefault();
    this.handleAdd(this.name, this.deadline);
    this.Data = {
      name: "",
      deadline: moment()
    };
  };
}

const store = new todoStore();
export default store;
