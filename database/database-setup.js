import knex from 'knex';
import knexFile from '../knexfile';
import { Model } from 'objection';

const setupDatabase = () => {
    const db = knex(knexFile.development);
    Model.knex(db);
}

export default setupDatabase;
