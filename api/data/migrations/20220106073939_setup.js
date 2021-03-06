exports.up = async (knex) => {
    await knex.schema
      .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 15).notNullable().unique()
        table.string('first_name', 15).notNullable()
        table.string('password', 200).notNullable()
        table.boolean('does_sucs').defaultTo(false)
        table.string('role').defaultTo('user')
      })
      .createTable('sucs', table => {
        table.increments('sucs_id')
        table.integer('situps')
        table.integer('crunches')
        table.integer('squats')
        // delete below - this is adding brian user to sucs tracking
        table.string('brian')
      })
      .createTable('races', table => {
        table.increments('race_id')
        table.string('past').defaultTo(false)
        table.string('race_name').notNullable()
        table.string('race_location').notNullable()
        table.string('race_date').notNullable()
        table.string('race_distance').notNullable()
        table.string('race_website').notNullable()
      })
      .createTable('user_races', table => {
        table.increments('user_races_id')
        table.integer('user_id')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onUpdate('RESTRICT')
          .onDelete('RESTRICT')
        table.integer('race_id')
          .unsigned()
          .notNullable()
          .references('race_id')
          .inTable('races')
          .onUpdate('RESTRICT')
          .onDelete('RESTRICT')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('user_races')
    await knex.schema.dropTableIfExists('races')
    await knex.schema.dropTableIfExists('sucs')
    await knex.schema.dropTableIfExists('users')
  }
  