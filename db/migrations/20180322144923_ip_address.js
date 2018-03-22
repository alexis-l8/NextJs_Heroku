exports.up = function(knex, Promise) {
  return knex.schema.table('mailing_list', (table) => {
    table.string('ip1');
    table.string('ip2');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('mailing_list', (table) => {
    table.dropColumn('ip2');
    table.dropColumn('ip1')
  })
};
