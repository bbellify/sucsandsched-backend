
exports.seed = async function(knex) {
    await knex('users').insert([
        { 
            username: 'admin',
            password: 'test',
            first_name: 'admin',
            role: 'admin'
        },
        {
            username: 'brian',
            password: 'test',
            first_name: 'brian',
            does_sucs: true
        }
    ])
};