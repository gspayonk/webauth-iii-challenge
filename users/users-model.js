const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('users')
    .select('id', 'username', 'password', 'role');
}

function findBy(role) {
    // make sure to include the role information
    return db('users')
    .where(role);
}

async function add(user) {
    const [id] = await db('users')
    .insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}
