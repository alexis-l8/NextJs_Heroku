exports.up = function(knex, Promise) {
  return knex.schema.table('mailing_list', (table) => {
    table.string('IP');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('mailing_list', (table) => {
    table.dropColumn('IP')
  })
};
