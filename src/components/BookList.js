import React from 'react';
import Book from './Books';
import Form from './BooksForm';

class BookList extends React.PureComponent {
  render() {
    const state = [
      {
        key: 0,
        title: 'Master stroke',
        author: 'ABBK',
      },
      {
        key: 1,
        title: 'Mama mia',
        author: 'ABBK',
      },
      {
        key: 2,
        title: 'Bongoland',
        author: 'Gommy',
      },
      {
        key: 3,
        title: 'Bad guys',
        author: 'Gommy',
      },
    ];
    return (
      <>
        <ul>
          {state.map((books) => (
            <li key={books.key}>
              {' '}
              <Book title={books.title} author={books.author} />
            </li>
          ))}
        </ul>
        <Form />
      </>
    );
  }
}
export default BookList;
