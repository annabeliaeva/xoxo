var postgres = require("postgres");
var connection = postgres.createConnection({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "postgres",
});

connection.connect();

connection.query("SELECT * FROM users", function (error, results, fields) {
  if (error) throw error;
  console.log("Results: ", results);
});

connection.end();
