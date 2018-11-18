import { observable, action } from "mobx";
import Data from "./../data/data";

class todoStore {
  @observable Data = Data;

  @action handleCheckBox = id => {
    this.Data = this.Data.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
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
