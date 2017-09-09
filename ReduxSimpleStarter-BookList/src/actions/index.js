export function selectBook(book) {
// selectBook is an ActionCreator, it needs to retun an  action,
// an object with a type property.

return {
  type: 'BOOK_SELECTED',
  payload: book
};
  // console.log('A Book has been selected : ', book.title);
}
