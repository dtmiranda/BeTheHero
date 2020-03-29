/**
 * FOR A INCIDENT TABELE
 */
exports.up = function(knex) {
    //Creating a INCIDENTS table on a database
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable()

        //create foreign Key
        table.foreign('ong_id').references('id').inTable('ongs')
        
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
