// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('code_db', 'root', 'singh@2023', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;