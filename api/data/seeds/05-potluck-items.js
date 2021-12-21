
exports.seed = async function(knex) {
    await knex('potluck_items').insert([
      {
        item_id: 1,
        potluck_id: 1
      },
      {
        item_id: 2,
        potluck_id: 1
      }
    ]);
  };
  