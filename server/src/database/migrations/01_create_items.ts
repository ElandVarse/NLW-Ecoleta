import Knex from 'knex';

export async function up(knex: Knex) {
    //Criar Tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex) {
    //Voltar atrás
    return knex.schema.dropTable('items');
}