# Defining Function

Zillabase provides commands to manage data model migrations. Database migration applies changes to the database schema, including tables, views, streams, etc. The Zillabase CLI migration commands help users create an empty migration file that can later be modified to define data models and streams. This migration file format is in SQL format and compatible with PostgreSQL syntax. Under the hood, it uses Risingwave, which acts as a "database" (a streaming database compatible with PostgreSQL-like syntax, to be exact). 

::: info
You can refer to [this article](https://docs.risingwave.com/sql/overview) for a complete supported SQL reference.
:::

Zillabase supports SQL functions, embedded functions (functions that are defined in SQL), and external user-defined functions (UDF) to accommodate business logic that cannot be covered with regular SQL. Currently, we support embedded functions written in Javascript, Python, and Rust and external user-defined functions written in Java and Python.

1. Create the migration file with the following command:

```sh
# command format
# zillabase migration add <migration-name>

# example
zillabase migration add create_function

# output
# Created migration 000001__create_table.sql
```

After the command succeeds, it prints the new migration file, which you can modify to define your data models. To modify the migration files, open the `zillabase/migrations` folder and edit the corresponding migration file.

2. Create an external UDF implementation file. Create `udf.py` in `zillabase/functions/python` and copy the following function definition.

```python
from arrow_udf import udf

# udf example with int result
@udf(input_types=['INT', 'INT'], result_type='INT')
def gcd(x, y):
    while y != 0:
        (x, y) = (y, x % y)
    return x
```

3. Edit the migration file with the following content.

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

4. To test the query.

```sql
-- test the external UDF
select gcd(12, 4);

-- test the embedded UDF
select gcd2(12, 4);

-- test the SQL UDF
Select add(1, 2);
```
