import {observable, action, computed, runInAction, configure} from 'mobx';
configure({ enforceActions: 'observed'});

class Store {
    @observable books = []
    @observable posts = []
    @observable state = 'pending'

    @action async getPosts() {
        this.posts = [];
        this.state = 'pending';
        try{
            const posts = await this.getData();
            runInAction(() => {
                this.state = 'done';
                this.posts = posts.filter((post, index) => index < 10);
            })
        }
        catch (error) {
            runInAction(() => {
                this.state = 'error';
            })
        }
    }
    @action addBook = (book) => {
        return this.books.push(book);
    }

    @computed get bookCount(){
        return this.books.length;
    }
    getData() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json());
    }
} 

const BooksStore = new Store();

export default BooksStore;