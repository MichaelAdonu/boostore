const mongoose = require('mongoose');

const bookModel = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'A book must have a title'],
			unique: true,
		},
		author: {
			type: String,
			required: [true, 'A book must have an author'],
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model('Book', bookModel);
module.exports = Book;
