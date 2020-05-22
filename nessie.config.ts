/*const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: "nessie",
    hostname: "localhost",
    port: 5432,
    user: "root",
    password: "pwd",
  },
  dialect: "pg",
};*/

const configMySql = {
  migrationFolder: `./migrations`,
  connection: {
    hostname: "95.216.37.253",
    port: 3306,
    username: "vicidial",
    password: "vicidial", // uncomment this line for <8
    db: "quickfacenats",
  },
  dialect: "mysql",
};

/*const configSqLite = {
  migrationFolder: `./migrations`,
  connection: "sqlite.db",
  dialect: "sqlite",
};*/

export default configMySql;
