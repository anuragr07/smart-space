const User = require('../Model/User');

exports.userLogin = async function (req, res) {
    await User.findOne({ username: req.params.username }, function (err, user) {
        if (err) return res.status(500).send({ auth: false });
        if (!user) return res.status(404).send({ auth: false });

        var passwordIsValid = (req.params.password == user.password)
        if (!passwordIsValid) return res.status(401).send({ auth: false});

        res.status(200).send({ auth: true, user_id: user.user_id, email: user.email});
    });
}

exports.getOneUser = async function(req, res){
    User.findOne({ user_id: req.params.id }, function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send({ auth: false });
        }
        console.log(user);
        if (!user) return res.status(404).send({ auth: false })
        res.status(200).send(user);
    }); 
}
