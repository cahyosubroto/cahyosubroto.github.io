# Defining Table

Zillabase provides commands to manage data model migrations. Database migration applies changes to the database schema, including tables, views, streams, etc. The Zillabase CLI migration commands help users create an empty migration file that can later be modified to define data models and streams. This migration file format is in SQL format and compatible with PostgreSQL syntax. Under the hood, it uses Risingwave, which acts as a "database" (a streaming database compatible with PostgreSQL-like syntax, to be exact). 

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::

A table defined will create a new topic, and CRUD APIs will be used to insert and query the data.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_table

# output
# Created migration 000001__create_table.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Edit the migration file with the following content.

```sql
CREATE TABLE streampay_users(
  id VARCHAR,
  name VARCHAR,
  username VARCHAR,
  initial_balance DOUBLE PRECISION,
  PRIMARY KEY (id)
);
```