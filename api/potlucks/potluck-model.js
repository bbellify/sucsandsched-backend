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

async function editPotluck(potluck, edits) {
 
    if (edits.date) {
         await db('potlucks as p')
            .update({
                date: edits.date
            })
        .where('p.potluck_id', potluck)
    } else if (edits.time) {
        await db('potlucks as p')
            .update({
                time: edits.time
            })
        .where('p.potluck_id', potluck)
    } else if (edits.location) {
        await db('potlucks as p')
        .update({
            location: edits.location
        })
    .where('p.potluck_id', potluck)
    }
    return getPotluckById(potluck)
}

function getUserByUsername(username) {
    return db('users as u')
        .where('u.username', username)
        .first()
}

async function addGuest(potluck, username) {
    const { user_id } = await getUserByUsername(username)
    
    await db('potluck_users')
        .insert({
            potluck_id: potluck,
            user_id: user_id
        })

    return getGuests(potluck)
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
        .select('i.item_name', 'pi.confirmed', 'pi.user_bringing')
        .where('pi.potluck_id', potluck)
}

function getGuests(potluck) {
    return db('potluck_users as pu')
        .join('users as u', 'pu.user_id', 'u.user_id')
        .where('pu.potluck_id', potluck)
        .select('u.username', 'pu.confirmed')
}

async function confirm(user, potluck) {
    return await db('potluck_users as pu')
        .update({
            confirmed: true
        })
        .where('pu.potluck_id', potluck)
        .where('pu.user_id', user)
}

module.exports = {
    getPotlucks,
    getPotluckById,
    create,
    editPotluck,
    addGuest,
    addItem,
    getItems,
    getGuests,
    confirm

}