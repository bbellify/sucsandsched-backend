
exports.seed = async function(knex) {
  await knex('potlucks').insert([
    {
      potluck_name: 'Grandma\'s 50th!',
      potluck_description: 'A lovely day in the park', 
      date: 'June 1, 2022',
      time: '1:00PM',
      location: 'Laurelhurst Park',
      organizer: 1
    }
  ]);
};
