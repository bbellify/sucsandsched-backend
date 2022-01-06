exports.up = async (knex) => {
    await knex.schema
      .createTable('sucs', table => {
        table.increments('sucs_id')
        table.integer('situps')
        table.integer('crunches')
        table.integer('squats')
      })
      .createTable('table2', table => {
        table.increments('id')
      })
      
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('table2')
    await knex.schema.dropTableIfExists('sucs')
  }
  