import { observable, action } from "mobx";
import Data from "./../data/data";

class todoStore {
  @observable Data = Data;

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
    const uniqueId = () => {
      return (
        "id-" +
        Math.random()
          .toString(36)
          .substr(2, 16)
      );
    };

    const addition = {
      id: uniqueId(),
      name,
      deadline,
      done: false
    };
    this.Data = [...this.Data, addition];
  };
}

const store = new todoStore();
export default store;
