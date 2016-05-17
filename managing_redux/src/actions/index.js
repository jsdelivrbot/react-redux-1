export function selectBook(book) {
	//selectBook is an ActionCreator, it needs to return an action, 
	//an object with a type property

	return {
		//actions always contains a type:

		//A type
		type: 'BOOK_SELECTED',

		//And sometimes a payload
		payload: book

	}
}