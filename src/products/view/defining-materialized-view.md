# Defining Materialized View

Zillabase provides commands to manage data model migrations. Database migration applies changes to the database schema, including tables, views, streams, etc. The Zillabase CLI migration commands help users create an empty migration file that can later be modified to define data models and streams. This migration file format is in SQL format and compatible with PostgreSQL syntax. Under the hood, it uses Risingwave, which acts as a "database" (a streaming database compatible with PostgreSQL-like syntax, to be exact). 

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::

A materialized view can consume streams, perform some transformation, and materialize it. The materialized view is always updated when new data is inserted into the stream.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_mv

# output
# Created migration 000001__create_mv.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Edit the migration file with the following content.

```sql
CREATE MATERIALIZED VIEW IF NOT EXISTS streampay_replies AS
    SELECT '400' AS status, encode(zilla_correlation_id, 'escape') AS correlation_id from streampay_commands where type NOT IN ('SendPayment', 'RequestPayment', 'RejectRequest')
    UNION
    SELECT '200' AS status,  encode(zilla_correlation_id, 'escape') AS correlation_id from streampay_commands where type IN ('SendPayment', 'RequestPayment', 'RejectRequest');
```

