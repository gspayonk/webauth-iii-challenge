const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, checkRole('none'), (req, res) => {
    Users.findBy(req.decodedJwt.role)
        .then(users => {
            res.json(users);
        })
        .catch(error => res.send(error));
});

module.exports = router;

function checkRole(role) {
    return function(req, res, next) {
        if (role.includes(req.decodedJwt.role)) {
        next();
        } else {
            res.status(403).json({ message: 'Big NoNo' });
        }
    };
}
