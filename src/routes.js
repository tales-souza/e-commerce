import express from 'express';
import UserController from './app/controllers/UserController'



const route = express.Router();



route.get('/', (req,res) => {
    return res.send('API OK');
})

route.get('/api/v1/users', UserController.index );
route.get('/api/v1/user/:id_usuario', UserController.indexById);

route.post('/api/v1/createuser', UserController.store );
route.put('/api/v1/updateuser/:id_usuario', UserController.update);


export default route;