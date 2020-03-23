const {User} = require('../models/user.model');

module.exports.createUser = (req, res) => {
    //console.log(req.body);
    User.findOne({ email: req.body.email })
        .then(existingUser => {
            //console.log(existingUser);
            if (existingUser !== null) {
                res.status(400).json({errors: { email: {message: "A user already exists with this email" }}});
            } else {
                const user = new User(req.body);
                user
                    .save() //before save, the password confirm validation will happen
                    .then(() => res.json(user))
                    .catch(err => res.status(400).json(err));
            }
        })
        .catch(err => res.status(400).json(err));
}


module.exports.login = (req, res) => {
    //console.log(req.body);
    User.findOne({ email: req.body.email })
        .then(user => {
            //console.log(user);
            if (user === null) {
                res.status(400).json({errors: { email: {message: "Email was not found" }}});
            } else {
                res.json(user);
                // bcrypt.compare(req.body.password, user.password)
                //     .then(passwordIsValid => {
                //         console.log("passwordIsValid: " + passwordIsValid);
                //         if (passwordIsValid) {
                //             res.json(user);
                //         // const newJWT = jwt.sign({ _id: user._id })
                //         // const secret = "mysecret";
                //         // res
                //         //     .cookie("usertoken", newJWT, secret, { httpOnly: true })
                //         //     .json({ msg: "success!" });
                //         } else {
                //             res.status(400).json({ errors: {password: {message: "Password is not valid" }}});
                //         }
                //     })
                //     .catch(err => res.status(400).json(err));
            }
        })
        .catch(err => res.json(err));
    };