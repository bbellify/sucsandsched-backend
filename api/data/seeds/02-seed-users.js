
exports.seed = async function(knex) {
    await knex('users').insert([
      {
        username: 'userone', 
        password: '$2a$08$n6HKlRImhu0rX3pfGblfVOSxJt3SNz20zBH7Fbxsgz7Cqh8tl3Y9m'
      },
      {
        username: 'usertwo', 
        password: '$2a$08$HcTrxRkn5oBJHcUWREOVm.T5HECjKzbDD4dWQzyl.6Lw1DlKTId2W'
      },
      {
        username: 'Cheyenne',
        password: '$2a$08$XOvVrG2w8e1vW5IkPi0vfuuepnsQZi1YDkm0HpIKQEyUQeioGg3Jm'
      }
    ]);
};
