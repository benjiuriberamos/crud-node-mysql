const connection = require('./connection')

const findAllActors = async () => {
    const [query] = await connection.execute('SELECT * FROM actor');
    return query;
}

const findActorById = async (id) => {
    const [query] = await connection.execute('SELECT * FROM actor where actor_id = ?', [id]);
    return query;
}

const createActor = async (first_name, last_name) => {
    const [query] = await connection.execute('INSERT INTO actor (first_name, last_name) VALUES (?, ?)', [first_name, last_name]);
    item = await findActorById(query.insertId);
    return item;
}

const updateActor = async (id, first_name, last_name) => {
    const [query] = await connection.execute('UPDATE actor SET first_name=?, last_name=? WHERE actor_id=?', [first_name, last_name, id]);
    return query;
}

const deleteActor = async (id) => {
    const actor = findActorById(id)
    if (actor === null) return null;
    await connection.execute('delete from film_actor where actor_id = ?;', [id])
    const query = await connection.execute('DELETE FROM actor WHERE actor_id = ?;', [id])
    return query;
}

module.exports = { 
    findAllActors, 
    findActorById, 
    updateActor, 
    deleteActor, 
    createActor
};