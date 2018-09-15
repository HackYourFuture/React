import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BooksStore')
@observer
class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        return this.props.BooksStore.addBook(e.target.bookName.value);
    }

    render() {

        const { BooksStore } = this.props;
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Add a book"
                    name="bookName" ref={input => (this.bookName = input)}
                    value={BooksStore.books[BooksStore.books.length]}
                />
            </form>
        );
    }
}

export default PostForm;
