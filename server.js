//import express

import express from 'express'

// import connection
import db from './config/db.config.js';
await db.sync({force:true});
//import router
import Router from './routes/user.routes.js';



const app= express();
 app.use(express.json());


 // Testing database connection 
try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);

// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));