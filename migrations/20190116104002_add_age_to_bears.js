
exports.up = function(knex, Promise) {
  return knex.schema.table('bears', function(tbl) {
    tbl.integer('age')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('bears', function(tbl) {
    tbl.dropColumn('age');
  });
};
