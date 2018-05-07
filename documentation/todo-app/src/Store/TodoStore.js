import { action, observable } from 'mobx'
import uuid from "uuid/v4"
class TodoStore {
    @observable
    tasks = [];

    @observable
    Description = "";


    @observable
    deadline = "";

    @action
    handelChangeDescripton = (e) => {
        this.Description = e.target.value
    }
    @action
    handelChangeDate = (e) => {
        this.deadline = e.target.value
    }

    @action
    onsubmit = (e) => {
        e.preventDefault();
        if (this.Description !== "" && this.deadline !== "") {
            let newState = {
                "id": uuid(),
                "description": this.Description,
                "deadline": this.deadline,
                "done": false
            }
            this.tasks = this.tasks.concat([newState]);
            this.Description = "";
            this.deadline = "";
        }
    }

    @action
    remove = (e, id) => {
        this.tasks = this.tasks.filter((ele) => {
            return ele.id !== id
        })
    }

    @action
    handelCheck = (e, index, isDone) => {
        if (isDone == true) {
            this.tasks[index].done = false;

        } else {
            this.tasks[index].done = true;

        }

    }
}
export default new TodoStore;