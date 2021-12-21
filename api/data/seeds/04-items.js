
exports.seed = async function(knex) {
    await knex('items').insert([
      {
        item_name: 'potato salad'
      },
      {
        item_name: 'cherry pie'
      }
    ]);
  };
  