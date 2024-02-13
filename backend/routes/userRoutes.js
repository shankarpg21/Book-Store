const express=require('express');
const router=express.Router();
const {login,register,getBook,buyBook,orders}=require('../controllers/userController')
const validateTokenHandler=require('../tokenHandler/userTokenHandler');

router.route('/login').post(login);
router.route('/register').post(register);
router.use(validateTokenHandler);
router.route('/getBook').get(getBook);
router.route('/buyBook/:bookId').put(buyBook);
router.route('/orders/:userId').get(orders);
module.exports=router;