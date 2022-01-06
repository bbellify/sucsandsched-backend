exports.up = async (knex) => {
    await knex.schema
      .createTable('table1', table => {
        table.increments('id')
      })
      .createTable('table2', table => {
        table.increments('id')
      })
      
  
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('table2')
    await knex.schema.dropTableIfExists('table1')
  }
  