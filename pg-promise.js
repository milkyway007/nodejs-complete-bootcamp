const pgp = require("pg-promise")();
const connectionString =
  "postgres://postgres:milkyway@localhost:5432/animal_shelter";
const databaseConfig = {
  host: "localhost",
  port: 5432,
  database: "animal_shelter",
  user: "postgres",
};
const db = pgp(connectionString);

db.none("delete from reference.colors where color = $1", ["Red"])
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    console.log(error);
  });

// db.none("UPDATE reference.colors SET color = $1 where color = $2", ["Red", "Purple"])
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.any("select  color from reference.colors;")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.none('INSERT INTO reference.colors (color) VALUES ($1)', ['red'])
// .then(() => {
//     console.log('Success');
// })
// .catch(error => {
//     console.log(error);
// });

// db.one('INSERT INTO reference.colors (color) VALUES ($1) RETURNING color', ['Purple'])
// .then((data) => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// });
