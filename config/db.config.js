// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('testdb', 'root', 'singh@2023', {
    host: 'localhost',
    dialect: 'mysql',
    password: 'singh@2023',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});
 
// export connection
export default db;