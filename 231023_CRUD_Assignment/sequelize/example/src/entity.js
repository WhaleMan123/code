const { db: config } = require("../config");
// console.log("username : ", username);
// console.log(require("../config.js"));

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

require("./user/user.entity")(sequelize, Sequelize.DataTypes);

// console.log(sequelize);
const { User } = sequelize.models;

module.exports = {
  sequelize,
  User,
};

// Test
// async function connectionTest() {
//   try {
//     console.log("DB Config: ", config); // 환경 변수 값 출력
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.log("Unable to connect to the database", error);
//   }
// }
// connectionTest();
