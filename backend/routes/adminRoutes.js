const express=require('express');
const validateToken = require('../tokenHandler/adminTokenHandler');
const router=express.Router();
const {login,addBook,getBook,deleteBook,updateBook}=require('../controllers/adminController');

router.route('/login').post(login);

router.use(validateToken);
router.route('/addBook').post(addBook);
router.route('/getBook').get(getBook);
router.route('/deleteBook/:bookId').delete(deleteBook);
router.route('/updateBook').put(updateBook);
module.exports=router