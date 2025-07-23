const BookService = require('../services/bookService');
exports.getBooks = async (req, res, next) => {
  try {
    const books = await BookService.getAll();
    res.json(books);
  } catch (error) {
    next(error);
  }
};
exports.addBook = async (req, res, next) => {
  try {
    const book = await BookService.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
exports.updateBook = async (req, res, next) => {
  try {
    const book = await BookService.update(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    next(error);
  }
};
exports.deleteBook = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await BookService.remove(req.params.id);
    
    
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    next(error);
  }
};