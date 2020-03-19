const UserController = require('../controllers/user.controller');
//const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/speech/register', UserController.createUser);
    app.post('/api/speech/login', UserController.login);
    //app.get('/api/users', authenticate, UserController.allUsers);
}