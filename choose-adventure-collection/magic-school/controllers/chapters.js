const Chapter = require('../models/chapter');

module.exports = {
    index,
    show,
}

function index(req, res) {
    res.render('chapters/index', {
        chapters: Chapter.getAll(),
        title: 'Chapter Index',
    });
};

function show(req, res) {
    res.render('chapters/show', {
        chapter: Chapter.getOne(req.params.id),
        title: 'Chapter Details',
    });
};