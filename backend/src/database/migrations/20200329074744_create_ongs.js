/**
 * FOR THE ONGS TABLE
 */
//UP metode: what i want to do or create
exports.up = function(knex) {
    //Creating a ONGs table on a database
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    });
  
};  

//DOWN metode: what i want to do if something get wrong
exports.down = function(knex) {
    //Delete a ONGs table
    return knex.schema.dropTable('ongs');  
};
