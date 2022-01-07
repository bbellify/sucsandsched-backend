
exports.seed = async function(knex) {
    await knex('user_races').insert(
        { 
            user_id: 2,
            race_id: 1
        }
    )
};

//table.integer('user_id')
//table.integer('race_id')