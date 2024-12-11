# Defining Stream

Zillabase provides commands to manage data model migrations. Database migration applies changes to the database schema, including tables, views, streams, etc. The Zillabase CLI migration commands help users create an empty migration file that can later be modified to define data models and streams. This migration file format is in SQL format and compatible with PostgreSQL syntax. Under the hood, it uses Risingwave, which acts as a "database" (a streaming database compatible with PostgreSQL-like syntax, to be exact). 

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::


A stream tracks all of the application's user commands. It creates a topic and produces CRUD APIs to produce and fetch the data. The stream can be consumed by other data models, including tables, views, and materialized views.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_stream

# output
# Created migration 000001__create_stream.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Edit the migration file with the following content.

```sql
CREATE STREAM streampay_commands(
    type VARCHAR,
    user_id VARCHAR,
    request_id VARCHAR,
    amount DOUBLE PRECISION,
    notes VARCHAR,
    zilla_correlation_id VARCHAR,
    zilla_identity VARCHAR,
    zilla_timestamp TIMESTAMP
);
```