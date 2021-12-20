import { Model } from 'objection';

class Author extends Model {
    static get tableName() {
        return 'authors';    
    }
}

export default Author;
