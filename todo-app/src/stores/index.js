import { configure } from "mobx"

import todosStore from "./TodosStore"

configure({ enforceActions: true });

export default {
    todosStore: todosStore
}