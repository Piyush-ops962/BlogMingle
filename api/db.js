import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Piyush123#",
  database:"blog",
  dialect: "mysql"
})