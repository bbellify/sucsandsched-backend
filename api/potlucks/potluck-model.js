const db = require('../data/db-config')

function getPotlucks() {
    
    return db('potlucks as p')
        .join('users as u', 'p.organizer', 'u.user_id')
        // another .join() for getting guests, items?
        .select('p.*', 'u.username')
}

//on put for a editing a potluck, use the jwtdecoded object on the req
function getPotluckById(id) {
    return db('potlucks as p')
    .join('users as u', 'p.organizer', 'u.user_id')
    // another .join() for getting guests, items?
    .select('p.*', 'u.username')
    .where('potluck_id', id)
    .first()
}

async function create(potluck) {
    return await db('potlucks as p')
        .insert(potluck, ['p.*'])
}

async function editPotluck(potluck) {

}

async function addGuest(potluck) {

}

function getItem(id) {
    return db('items as i')
        .join('potluck_items as pi', 'pi.item_id', 'i.item_id')
        .select('i.*', 'pi.confirmed', 'pi.user_bringing')
        .where('i.item_id', id)
}

async function addItem(item, potluck) {
    const [newItem] = await db('items').insert(item, ['items.*'])
    
    const itemToAdd = { 
        item_id: newItem.item_id,
        potluck_id: potluck,
    }
    await db('potluck_items as pi').insert(itemToAdd)
    return getItem(newItem.item_id)
}

function getItems(potluck) {
    return db('items as i')
        .join('potluck_items as pi', 'pi.item_id', 'i.item_id')
        .select('i.*', 'pi.confirmed', 'pi.user_bringing')
        .where('pi.potluck_id', potluck)
}

function getGuests(potluck) {
    return db('potluck_users as pu')
        .join('users as u', 'pu.user_id', 'u.user_id')
        .where('pu.potluck_id', potluck)
        .select('u.username', 'pu.confirmed')
}

module.exports = {
    getPotlucks,
    getPotluckById,
    create,
    editPotluck,
    addGuest,
    addItem,
    getItems,
    getGuests

}