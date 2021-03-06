// Create Postgres Table 
const {Pool} = require('pg');
const async = require('async');
var pgtools = require('pgtools');

async function make() {
    // await DropTable();
    await createDatabse();
    await CreateTable();

};

async function createDatabse(){
    const config = {
        user: "postgres",
        host: "pg",
        password: "123456",
        port: 5432
      };

      await pgtools.createdb(config,"auth_db").then(
          function(res){
              console.log("db/:make Creating 'auth_db' ");
            
          },function(err){
              console.log("err DB",err)
          }
      )

}

const connectionString = 'postgresql://postgres:123456@pg:5432/auth_db';

const pool = new Pool({
    connectionString: connectionString
});
pool.on('connect', () => {
    console.log('connected to the db');
});
console.log("db/make: Connecting to database...");


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

module.exports=make;