var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var chaptersCtrl = require('../controllers/chapters');

router.get('/', chaptersCtrl.index);
router.get('/:id', chaptersCtrl.show);

module.exports = router;
