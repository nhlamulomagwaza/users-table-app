const express= require('express');
const router= express.Router();

const {getUsers, getAUser, addUser, updateUser, deleteUser}= require('../controllers/usersController');


//ROUTES


/* router.get('/', (req, res) => {
    console.log('API connected successfully');
   res.status(200).json({message: 'API connected successfully'});
});
 */

router.get('/', getUsers);
router.get('/:id', getAUser);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports= router;