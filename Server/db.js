import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Shri@12345",
  database:"blog"
})

db.connect(function (err) {
  if (err) {
      console.log('Error connecting to Database',err);
      return;
  }
  console.log('Connection established');
});
