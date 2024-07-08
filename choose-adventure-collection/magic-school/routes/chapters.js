var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var chaptersCtrl = require('../controllers/chapters');

router.get('/', chaptersCtrl.index);

router.get('/new', chaptersCtrl.new);
router.post('/', chaptersCtrl.create);
router.get('/:id/edit', chaptersCtrl.edit);
router.put('/:id', chaptersCtrl.update);

router.get('/:id', chaptersCtrl.show);

router.delete('/:id', chaptersCtrl.delete);



module.exports = router;
