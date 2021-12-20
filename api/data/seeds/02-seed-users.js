
exports.seed = async function(knex) {
    await knex('users').insert([
      {username: 'userone', password: 'passwordone'},
      {username: 'usertwo', password: 'passwordtwo'},
      {username: 'userthree', password: 'passwordthree'}
    ]);
};
