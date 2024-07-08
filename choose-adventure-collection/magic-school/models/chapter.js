const chapters = [
    { id: 1, chapter: 'Chosen One', played: false },
    { id: 2, chapter: 'Goodbye', played: false },
    { id: 3, chapter: 'Welcome to Mystic Moon!', played: false }
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return chapters;
};

function getOne(id) {
    id = parseInt(id);
    return chapters.find(chapter => chapter.id === id);
};