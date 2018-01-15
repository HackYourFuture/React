import { observable, action } from "mobx";

export default class TodoStore {
  @observable todos = [];
}
