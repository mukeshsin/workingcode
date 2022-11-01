// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";

const { DataTypes } = Sequelize;
// table define
const User = db.define(
  "users",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    emailId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "please insert a valid email address",
        },
      },
    },
    mobileNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.STRING,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

// Export user
export default User;
