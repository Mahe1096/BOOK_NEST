const Book = require('../models/Book');
exports.getAll = () => Book.find();
exports.create = (data) => new Book(data).save();
exports.update = (id, data) => Book.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => Book.findByIdAndDelete(id);