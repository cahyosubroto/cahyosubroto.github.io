
# Quickstart

Learn how to integrate Zillabase with your project quickly using Zillabase CLI.

## Prerequisites

- Java 20+
- Homebrew package manager
- Docker

## Install Zillabase CLI

Zillabase CLI is a CLI application that helps you generate and manage Zillabase configuration for your application. To install the CLI, run the following command:

```sh
# add aklivity/tap to the brew source repository
brew tap aklivity/tap

# install zillabase
brew install zillabase

# test the installation
zillabase 
```

## Integrate your Project with Zillabase

### Step 1: Initializing a Zillabase Project

You can initialize a Zillabase project either from a new  project’s directory or an existing  project’s directory with the following command:

```sh
zillabase init
```

The command will initialize a new Zillabase folder with a config.yaml and seed.sql file. The config.yaml can be used to modify the Zillabase startup configuration, including authentication, environment variables, etc.

::: info
The _seed.sql_ file is executed during the initialization of the project.
:::

### Step 2: Defining Data Models and Streams

The next step is to define a data model with database migrations. Database migration is used to apply changes to the database schema, including tables, views, streams, etc. Zillabase supports the following features for database migration:

- The Zillabase CLI migration command helps users create an empty migration file that can later be modified to define data models and streams.
- The migration file format is in SQL format, which is compatible with PostgreSQL syntax.

::: info
Refer to [this article](https://docs.risingwave.com/sql/overview) for a complete SQL and supported reference.
:::

1. Define a table with an SQL-like syntax.

```sh
zillabase migration add create_tables

# output
# Created migration 000000__create_tables.sql
```

2. Open the generated SQL file and fill it with the following table definition.

```sql
CREATE TABLE users(
  id varchar,
  username varchar,
  name varchar,
  PRIMARY KEY (id)
);
```

3. Create a new stream to track all of the user commands for the application.

```sql
CREATE STREAM user_activities (
  activity_name varchar,
  user_id varchar
);
```

### Step 3: Defining Business Logic via Python or Java Functions (OPTIONAL)

In additional files, you can declare or define a user-defined function in SQL-like syntax. Currently, we only support additional files written in Python and Java.

::: info
You can also use and start Zillabase without defining any additional Python or Java functions.
:::

1. Create a Python file in `zillabase/functions/python/calculate_score.py` with the following content.

```python
from arrow_udf import udf  # for registering User Defined Functions
import random


@udf(
    input_types=["VARCHAR"],
    result_type="INT",
)
def calculate_score(activity: str):
    if activity.lower() == "good":
        return 10
    elif activity.lower() == "bad":
        return -10
    elif activity.lower() == "neutral":
        return 2

    return random.randint(-5, 5)
```

::: info
Any external UDFs written in Python must be stored in `zillabase/functions/python` directory in order to be auto-picked by the Python UDF server.
:::

2. Next, we'll have to define the function in our migration files.

```sh
zillabase migration add define_function

# output
# Created migration 000001__define_function.sql
```

```sql
-- declare the user-defined function

CREATE FUNCTION calculate_score(varchar) RETURNS int
LANGUAGE python AS calculate_score;
```

### Step 4: Calling the Function (OPTIONAL)

We'll call the function inside a materialized view aggregating each user's activity scores. You can call the function just like you'd call a function in SQL.

```sh
zillabase migration add activity_scores

# output
# Created migration 000002__activity_scores.sql
```

```sql
CREATE MATERIALIZED VIEW activity_scores AS
    WITH activities AS (
        SELECT user_id, calculate_score(activity_name)::int AS score
        FROM user_activities
    ),
    score AS (
        SELECT user_id, SUM(score) as score
        FROM activities
        GROUP BY user_id
    )
    SELECT id, name, score
    FROM score
    INNER JOIN users ON users.id = score.user_id;
```

When a new stream message arrives, the `activity_scores` materialized view will be recomputed to keep the data fresh.

### Step 5: Setting Up Authentication (OPTIONAL)

You can define a data seed from the `seed.sql` file.

1. Edit the config.yaml to add a predefined Keycloak users.

```yaml
# config
keycloak:
  realm: zillabase
  users:
    - username: admin
      email: johndoe@example.com
      name: John Doe
      password: password
  client:
    client-id: activity
    redirects:
      - http://localhost:8084/*
```

### Step 6: Pre-Populate Data During Startup (OPTIONAL)

You can pre-populate data during startup by modifying the `seed.sql` file. This file will be run after the database migration is completed. In this example, modify the `seed.sql` file with the following content:

```sql
INSERT INTO users (id, name) VALUES ('allen', 'allen');
INSERT INTO users (id, name) VALUES ('bertollo', 'bertollo');
```

### Step 7: Start Zillabase

1. Start Zillabase with the following command and wait for the initialization to finish.

```sh
zillabase start

# output
# latest: Pulling from aklivity/zillabase
# …
# seed.sql processed successfully!
# ...
# Realm: zillabase created successfully.
# ...
# Config Server is populated with zilla.yaml
```

2. Zillabase leverages the AsyncAPI schema definition to define the generated streaming APIs. You can create an asyncapi.yaml schema file by running the following command.

```sh
zillabase asyncapi show http-asyncapi >> asyncapi_REST_APIs.yaml
```

3. Once you have started Zillabase and generated your AsyncAPI schema, you can copy it into the [AsyncAPI Studio](https://studio.asyncapi.com/) to see a full list of all the streaming APIs you have created.


### Step 8: Testing the Endpoints

1. Authenticate through Keycloak to get the access token.

```sh
curl -X POST 'http://localhost:8180/realms/zillabase/protocol/openid-connect/token' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=activity' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'username=admin \
--data-urlencode 'password=password'
```

2. Insert some activity.

```sh
curl -X POST 'http://localhost:8080/user_activities' \
-H 'Content-Type: application/json' -H ‘Authorization: Bearer access_token’ \
--data ‘{"activity_name": "good", "user_id": "allen"}’
```

3. Show the activity scores.

```sh
curl -X GET 'http://localhost:8080/activity_scores' \
 -H ‘Authorization: Bearer access_token’
```


### Step 9: Stop Zillabase

You can stop Zillabase with the following command:

```sh
zillabase stop
```