import uuid from "uuid/v4";
import { observable, action } from "mobx";


const API_ROOT = "https://hyf-react-api.herokuapp.com";

class TodosStore {
    @observable
    tasks = [];

    @observable
    Description = "";


    @observable
    deadline = "";


    @action
    getTodos = async () => {
        try {
            const result = await fetch(`${API_ROOT}/todos/`);
            const parseResult = await result.json();
            this.tasks = parseResult;

        }
        catch (error) {

            throw error
        }
    }

    @action
    handelChangeDescripton = (e) => {
        this.Description = e.target.value
    }
    @action
    handelChangeDate = (e) => {
        this.deadline = e.target.value
    }


    @action
    onsubmit = async (e) => {
        e.preventDefault();

        if (this.Description !== "" && this.deadline !== "") {

            let newTodo = {
                "id": uuid(),
                "description": this.Description,
                "deadline": this.deadline,
                "done": false
            }
            try {
                await fetch(`${API_ROOT}/todos/create`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newTodo)
                })


            } catch (err) {
                throw err;
            }
            this.getTodos();
            this.Description = "";
            this.deadline = "";
        }
    }

    @action
    remove = async (e, _id) => {
        try {
            await fetch(`${API_ROOT}/todos/${_id}`, {
                method: "DELETE"
            })

        } catch (error) {
            throw error
        }
        this.getTodos();
    }

    @action
    handelCheck = async (e, id) => {
        try {
            let Todo = this.tasks.find(todo => todo._id === id);

            await fetch(`${API_ROOT}/todos/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    done: !Todo.done
                })
            });

        } catch (error) {
            throw error
        }
        this.getTodos();

    }
}
export default new TodosStore();