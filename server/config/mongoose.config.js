const mongoose = require('mongoose');
const dbname = 'speech';

mongoose.connect(`mongodb://localhost/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log(`Connected to ${dbname} database`))
    .catch(err => console.log(`Unable to connect to ${dbname} database`, err))