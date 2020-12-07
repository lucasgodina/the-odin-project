const getTheTitles = function (books) {
	let booksTitles = [];
	books.forEach((book) => booksTitles.push(book.title));
	return booksTitles;
};

module.exports = getTheTitles;
