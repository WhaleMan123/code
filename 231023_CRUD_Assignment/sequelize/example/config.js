require("dotenv").config();
// require("dotenv").config({ path: "../.env" });
// console.log(process.env);

const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME, DB_PORT } = process.env;
// console.log(DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME, DB_PORT);

// let username = process.env.DB_USERNAME;
// console.log(username);

module.exports = {
  db: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
  },
};

// module.exports = { username: username };
