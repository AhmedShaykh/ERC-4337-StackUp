CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" varchar(255) NOT NULL,
	"isdone" boolean
);