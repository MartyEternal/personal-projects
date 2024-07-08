const Chapter = require('../models/chapter');

module.exports = {
    index,
    show,
    new: newChapter,
    create,
    delete: deleteChapter,
    edit,
    update,
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

function newChapter(req, res) {
    res.render('chapters/new', { title: 'New Chapter' });
};

function create(req, res) {
    console.log(req.body);
    res.redirect('/chapters');
};

function deleteChapter(req, res) {
    Chapter.deleteOne(req.params.id);
    res.redirect('/chapters');
};

function edit(req, res) {
    res.render('chapters/edit', {
        chapter: Chapter.getOne(req.params.id),
        title: 'Edit Chapter',
    });
};

function update(req, res) {
    Chapter.update(req.params.id, req.body);
    res.redirect(`/chapters/${req.params.id}`);
};