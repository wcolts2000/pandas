exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(tbl) {
    // primary key -- if Primary key is Id you can use below syntax without passing name param
    tbl.increments(); 

    //other fields
    tbl.string('name', 255); // second optional param of length

    // timestamps
    tbl.timestamps(true, true);

    // foreign key example
    // tbl.integer('category_id').unsigned().references('id').inTable('categories')

    // constraints
    tbl.unique('name', 'uq_items_name'); // makes passed in fields unique
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('items', function(tbl) {
    tbl.dropUnique('name', 'uq_items_name')
  } )
  return knex.schema.dropTableIfExists('items');

};
