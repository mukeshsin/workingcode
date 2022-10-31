// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/db.config.js";

const { DataTypes } = Sequelize;
 // table define
const User = db.define('users', {
  firstName: {
    type: DataTypes.STRING
  },
   lastName:{
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});


// Export user
export default User;