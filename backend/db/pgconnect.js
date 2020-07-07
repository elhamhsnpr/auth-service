// connect to postgres DB


const {Pool} = require('pg');
const make = require('./makePg');

make();

const connectionString = 'postgresql://postgres:123456@pg:5432/auth_db';

const pool = new Pool({
    connectionString: connectionString
});
pool.on('connect', () => {
    console.log('connected to the db');
});


module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
};