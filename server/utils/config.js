import "dotenv/config";

export default {
	dbUrl: createDatabaseUrl(),
	logLevel: process.env.LOG_LEVEL ?? "info",
	port: parseInt(process.env.PORT ?? "3000", 10),
	production: process.env.NODE_ENV === "production",
};

function createDatabaseUrl() {
	if (process.env.DATABASE_URL) {
		return process.env.DATABASE_URL;
	}
	const host =
		process.env.DB_HOST ??
		"dpg-ch6fa5o2qv26p1858j7g-a.frankfurt-postgres.render.com";
	const name = process.env.DB_NAME ?? "cyf_ar6r";
	const password =
		process.env.DB_PASS ??
		process.env.DB_PASSWORD ??
		"iuA1JaO3O3Cq5kA3f7NmyUlBHKUvQebq";
	const port = process.env.DB_PORT ?? "5432";
	const username =
		process.env.DB_USER ?? process.env.DB_USERNAME ?? "cyf_ar6r_user";
	const userinfo = `${username}:${password}`;
	return `postgres://${
		userinfo !== ":" ? `${userinfo}@` : ""
	}${host}:${port}/${name}`;
}
