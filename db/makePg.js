// Create Postgres Table 
const {Pool} = require('pg');
const async = require('async');

const connectionString = 'postgresql://postgres:123456@localhost:5432/auth_db';

const pool = new Pool({
    connectionString: connectionString
});
pool.on('connect', () => {
    console.log('connected to the db');
});
console.log("db/make: Connecting to database...");

async function makeTable() {
    // await DropTable();
    await CreateTable();
  


};

async function CreateTable(){
        //Add User Table
        let query = `CREATE TABLE IF NOT EXISTS users (
            _id SERIAL PRIMARY KEY ,         
            firstName VARCHAR(45) ,
            lastName VARCHAR(45) ,
            username VARCHAR(45),
            password VARCHAR(200),
            userType VARCHAR(45)
           );`;
await pool.query(query).then(
    function (res) {
        console.log("db/:Make Creating 'Users' Table ");
    },
    function (err) {
        console.log('err Users:', err);
    });

}

function f() {
    try {
        makeTable();
    } catch (e) {
        console.log(e);
    }
}

f();