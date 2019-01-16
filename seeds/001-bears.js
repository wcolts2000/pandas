
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bears')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bears').insert([
        {name: 'Yogi'},
        {name: 'BooBoo'},
        {name: 'Po'},
        {name: 'Smokey'},
        {name: 'Teddy'}
      ]);
    });
};
