const UserController = require('../controllers/user.controller');
const ExerciseController = require('../controllers/exercise.controller');
//const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/speech/register', UserController.createUser);
    app.post('/api/speech/login', UserController.login);
    //app.get('/api/users', authenticate, UserController.allUsers);
    app.post('/api/speech/exercise', ExerciseController.createExercise);
    app.get('/api/speech/exercise/:id', ExerciseController.getExercise);
    app.put('/api/speech/exercise/:id/updateWord', ExerciseController.updateWord);
    app.put('/api/speech/exercise/:id/deleteWord', ExerciseController.deleteWord);
    app.delete('/api/speech/exercise/:id', ExerciseController.deleteExercise);
}