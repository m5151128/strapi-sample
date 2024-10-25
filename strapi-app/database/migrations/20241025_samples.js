"use strict";

module.exports = {
  async up(knex) {
    await strapi.db.transaction(async () => {
      await knex.schema.table('sample', table => {
        table.renameColumn('text', 'new_text');
      });
    });
  },
};
