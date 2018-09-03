import {observable, action, computed} from 'mobx';

class Store {
    @observable books = []

    @action addBook = (book) => {
        return this.books.push(book);
    }

    @computed get bookCount(){
        return this.books.length;
    }
} 

const BooksStore = new Store();

export default BooksStore;