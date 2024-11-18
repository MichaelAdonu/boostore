//import book model
const Book = require('../models/bookModel');

// create and save a new book
exports.createBook = async (req, res) => {
	try {
		const newBook = await Book.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				book: newBook,
			},
			message: 'Book created successfully',
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error,
		});
	}
};

// get all books
exports.getAllBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json({
			status: 'success',
			results: books.length,
			data: {
				books,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error,
		});
	}
};

// get a single book by id
exports.getBookById = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				book,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error,
		});
	}
};

// update a book by id
exports.updateBookById = async (req, res) => {
	try {
		const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: 'success',
			data: {
				book,
			},
			message: 'Book updated successfully',
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error,
		});
	}
};

// delete a book by id

exports.deleteBookById = async (req, res) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: 'success',
			data: null,
			message: 'Book deleted successfully',
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: error,
		});
	}
};
