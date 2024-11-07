const express = require('express');
const {
	getAllBooks,
	createBook,
	getBookById,
	updateBookById,
	deleteBookById,
} = require('../controllers/bookController');

const router = express.Router();

router.route('/').get(getAllBooks).post(createBook);
router
	.route('/:id')
	.get(getBookById)
	.patch(updateBookById)
	.delete(deleteBookById);

module.exports = router;
