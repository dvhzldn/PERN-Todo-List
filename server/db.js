import Postgres from "pg";

export const pool = new Postgres.Pool({
	host: "localhost",
	port: 5432,
	database: "perntodo",
});
