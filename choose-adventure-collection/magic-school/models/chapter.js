const chapters = [
    { id: 1, chapter: 'Chosen One', played: false },
    { id: 2, chapter: 'Goodbye', played: false },
    { id: 3, chapter: 'Welcome to Mystic Moon!', played: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function getAll() {
    return chapters;
};

function getOne(id) {
    id = parseInt(id);
    return chapters.find(chapter => chapter.id === id);
};

function create(chapter) {
    chapter.id = Date.now() % 1000000;
    chapter.played = false;
    chapters.push(chapter);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = chapters.findIndex(chapter => chapter.id === id);
    chapters.splice(idx, 1);
};

function update(id, updatedChapter) {
    id = parseInt(id);
    const idx = chapters.findIndex((chapter) => chapter.id === id);
    if (idx !== -1) {
        chapters[idx].chapter = updatedChapter.chapter;
    };
};