const {User} = require('../models/user.model');

module.exports.createUser = (req, res) => {
    //console.log(req.body);
    const user = new User(req.body);
    user
        .save() //before save, the password confirm validation will happen
        .then(() => res.json(user))
        .catch(err => res.status(400).json(err));
}


module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.json({ email: "Email not found" });
            } else {
                bcrypt
                .compare(req.body.password, user.password)
                .then(passwordIsValid => {
                    if (passwordIsValid) {
                    const newJWT = jwt.sign({ _id: user._id })
                    const secret = "mysecret";
                    res
                        .cookie("usertoken", newJWT, secret, { httpOnly: true })
                        .json({ msg: "success!" });
                    } else {
                        res.json({ password: "Password is not valid" });
                    }
                })
                .catch(err => res.status(400).json(err));
            }
        })
        .catch(err => res.json(err));
    };