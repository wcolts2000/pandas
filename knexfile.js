// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './bears.db3'
    },
    useNullAsDefault: true
  },
};
