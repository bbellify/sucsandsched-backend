
exports.seed = async function(knex) {
    await knex('users').insert([
        // {
        //     username: 'test',
        //     password: 'test',
        //     first_name: 'test',
        // },
        // {
        //     username: 'temp',
        //     password: 'temp',
        //     first_name: 'temp',
        // },
        { 
            username: 'admin',
            password: '$2a$08$JRFUYW7Txz7XhA5cupUjUOqPuMiGPhIcDNWXxL1QkFCbyCLIYerBK',
            first_name: 'admin',
            role: 'admin'
        },
        {
            username: 'brian',
            password: '$2a$08$t8wCwz4mihTo4uK9l68HMOH0P3SzC7Q4WMC24oPb.vNTc0ag8Z1I6',
            first_name: 'brian',
            does_sucs: true
        }
    ])
};