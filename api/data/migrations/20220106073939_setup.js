exports.up = async (knex) => {
    await knex.schema
      .createTable('sucs', table => {
        table.increments('sucs_id')
        table.integer('situps')
        table.integer('crunches')
        table.integer('squats')
      })
      .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 15).notNullable()
        table.string('first_name', 15).notNullable()
        table.string('password', 16).notNullable()
        table.boolean('does_sucs').defaultTo(false)
        table.string('role').defaultTo('user')

      })
      .createTable('races', table => {
        table.increments('race_id')
        table.string('past').defaultTo(false)
        table.string('race_name').notNullable()
        table.string('race_date').notNullable()
        table.string('race_location').notNullable()
        table.string('race_website').notNullable()
      })
      .createTable('users_races', table => {
        table.increments('user_races_id')
        table.integer('user_id')
          .unSigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onUpdate('RESTRICT')
          .onDelete('RESTRICT')
      })
      

  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('table2')
    await knex.schema.dropTableIfExists('sucs')
  }
  