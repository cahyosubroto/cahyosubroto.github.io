# Migrations

Zillabase provides commands to manage data model migrations. Database migration applies changes to the database schema, including tables, views, streams, etc. The Zillabase CLI migration commands help users create an empty migration file that can later be modified to define data models and streams. This migration file format is in SQL format and compatible with PostgreSQL syntax. Under the hood, it uses Risingwave, which acts as a "database" (a streaming database compatible with PostgreSQL-like syntax, to be exact). 

On the other hand, Zillabase also provides a `seed.sql` file for every project created that will be run during project initialization. This file will be run after migration and can be used to seed or insert some initial data.

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::

## Basic Commands

### List existing migrations

Run the following command to list existing migration files. The migration files are prefixed by incremental numbers with some zero-number padding.

```sh
zillabase migration list

# output example
# 000000__create_users.sql
# 000001__create_commands_and_replies.sql
# 000002__create_balances.sql
# 000003__create_unique_id_function.sql
# 000004__create_activities.sql
# 000005__create_payment_requests.sql
# 000006__create_payment_risk_assessment.sql
```

To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.


### Create a new migration

To create a new migration, use the following command.

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add fraud_history

# output
# Created migration 000007__fraud_history.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models.


## Examples

### Defining Function

Zillabase supports SQL functions, embedded functions (functions that are defined in SQL), and external user-defined functions (UDF) to accommodate business logic that cannot be covered with regular SQL. Currently, we support embedded functions written in Javascript, Python, and Rust and external user-defined functions written in Java and Python.

1. Create an external UDF implementation file. Create `udf.py` in `zillabase/functions/python` and copy the following function definition.

```python
from arrow_udf import udf

# udf example with int result
@udf(input_types=['INT', 'INT'], result_type='INT')
def gcd(x, y):
    while y != 0:
        (x, y) = (y, x % y)
    return x
```

2. Declare the functions in migration files.

```sql
-- declare function from an external user-defined function

CREATE FUNCTION gcd(int, int) RETURNS int
LANGUAGE python AS gcd;

-- embedded function

CREATE FUNCTION gcd2(a int, b int) RETURNS int LANGUAGE python AS $$
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
$$;

-- SQL UDF
CREATE FUNCTION add(INT, INT) RETURNS int LANGUAGE sql AS $$select $1 + $2$$;
```

3. To test the query.

```sql
-- test the external UDF
select gcd(12, 4);

-- test the embedded UDF
select gcd2(12, 4);

-- test the SQL UDF
Select add(1, 2);
```

::: info
Refer to [this article](/guides/user-defined-function) for a more complete UDF guide.
:::


### Defining Table

A table defined will create a new topic, and CRUD APIs will be used to insert and query the data.

```sql
CREATE TABLE streampay_users(
  id VARCHAR,
  name VARCHAR,
  username VARCHAR,
  initial_balance DOUBLE PRECISION,
  PRIMARY KEY (id)
);
```


### Defining Stream

A stream tracks all of the application's user commands. It creates a topic and produces CRUD APIs to produce and fetch the data. The stream can be consumed by other data models, including tables, views, and materialized views.

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


### Defining Materialized View

A materialized view can consume streams, perform some transformation, and materialize it. The materialized view is always updated when new data is inserted into the stream.

```sql
CREATE MATERIALIZED VIEW IF NOT EXISTS streampay_replies AS
    SELECT '400' AS status, encode(zilla_correlation_id, 'escape') AS correlation_id from streampay_commands where type NOT IN ('SendPayment', 'RequestPayment', 'RejectRequest')
    UNION
    SELECT '200' AS status,  encode(zilla_correlation_id, 'escape') AS correlation_id from streampay_commands where type IN ('SendPayment', 'RequestPayment', 'RejectRequest');
```


### Defining View

A view can consume a stream or query from another table. Unlike the materialized view, it only provides a view that depends on the defined query and does not materialize the data. Best for cases where you want to save a view query but don't want the result to be materialized.

```sql
CREATE VIEW user_transactions AS
  SELECT
      encode(zilla_identity, 'escape') AS user_id,
      -amount AS net_amount
  FROM streampay_commands
  WHERE type = 'SendPayment'
  UNION ALL
  SELECT
      user_id AS user_id,
      amount AS net_amount
  FROM streampay_commands
  WHERE type = 'SendPayment';
```


### Initializing Database with Seeder

You can perform some insert query from `seed.sql` file to initialize the database with initial data. This seeder file will be run after every migration file is run.

```sql
-- insert some initial user data

INSERT INTO streampay_users (id, name, username, initial_balance) VALUES ('allen', 'Allen Doe', 'allen', 10000);
INSERT INTO streampay_users (id, name, username, initial_balance) VALUES ('bertollo', 'Bertollo Doe', 'bertollo', 10000);
INSERT INTO streampay_users (id, name, username, initial_balance) VALUES ('candice', 'Candice Doe', 'candice', 10000);
```