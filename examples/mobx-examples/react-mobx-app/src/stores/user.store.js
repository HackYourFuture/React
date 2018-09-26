import {observable, action, computed, configure} from 'mobx';

configure({enforceActions: true});

class User {
    @observable userName = 'nouran';

    @computed get nameWithGreetings() {
        return 'Hallo,' + this.userName + '!';
    }

    @action.bound
    addNewName(value) {
        console.log(this)
        this.userName = value;
    }
}

export default new User();
