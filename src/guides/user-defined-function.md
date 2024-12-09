# User-Defined Function

Zillabase supports SQL functions, embedded functions (functions that are defined in SQL), and external user-defined functions (UDF) to accommodate business logic that cannot be covered with regular SQL. Currently, we support embedded functions written in Javascript, Python, and Rust and external user-defined functions written in Java and Python.

In general, here is the flow for using user-defined functions:

1. Define the function implementation in `zillabase/functions/python` or `zillabase/functions/java` (for external UDF). 
2. Declare the function definition in a migration file.
3. Call the function in SQL statement the same way as you would call functions in SQL.

Let's get deeper into the explanation for each UDF.

## Embedded User-Defined functions

In embedded functions, the function implementation is defined in the SQL function definition. Unlike external UDF, embedded UDF is run internally in Risingwave, so it does not offer as much flexibility as external UDF does. Because of this, embedded UDF are limited for computational purposes only and do not have access to external networks.

### Example

These steps will walk you through the UDF example in Python.

1. Create an empty folder.

```sh
mkdir udf-embedded  # create a new folder
cd udf-embedded # change the current directory
```

2. Initialize an empty Zillabase project.

```sh
zillabase init
```

3. Create a new migration file.

```sh
zillabase migration add create_function
```

4. Define the function in the migration file.

```sql
CREATE FUNCTION gcd(a int, b int) RETURNS int LANGUAGE python AS $$
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
$$;
```

5. Run the project.

```sh
zillabase start
```

6. Connect to the database with PSQL.

```sh
psql -U root -d dev -h localhost -p 4567
```

::: info
If you don't have psql installed, install it with the following commands:

Debian:

```sh
sudo apt-get install -y postgresql-client
```

MacOS:

```sh
brew install libpq
```

:::

7. Run a query.

```sql
select gcd(12, 4);
```

10. Stop the project.

```sh
zillabase stop
```

## External User-Defined Functions in Python

To declare the function in Python, we'll use the [`arrow-udf`](https://pypi.org/project/arrow-udf/) package. You'll need to annotate the function that you want to expose, and then define the input and return types. On the other hand, you can also provide `requirements.txt` file in the `zillabase/functions/python` path in case you want to install additional Python packages. After that, you need to declare the function in a migration file.

::: info
Any external UDFs written in Python must be stored in `zillabase/functions/python` directory in order to be auto-picked by the Python UDF server.
:::

### Adding Environment Variables

You can add environment variables during UDF execution by modifying the `config.yaml` file. For example:

```yaml
udf:
  python:
    env:
      - MY_VAR=value
```

### Example

These steps will walk you through the UDF example in Python.

1. Create an empty folder.

```sh
mkdir udf-python # create a new folder
cd udf-python # change the current directory
```

2. Initialize an empty Zillabase project.

```sh
zillabase init
```

3. Create a `requirements.txt` file in `zillabase/functions/python` and add the following packages.

```text
numpy==2.1.3
```

4. Create `udf.py` in `zillabase/functions/python` and copy the following function definition.

```python
from arrow_udf import udf
import numpy as np

# udf example with int result
@udf(input_types=['INT', 'INT'], result_type='INT')
def gcd(x, y):
    while y != 0:
        (x, y) = (y, x % y)
    return x

# udf example with struct (object) result type
@udf(input_types=['VARCHAR'], result_type='STRUCT<key: VARCHAR, value: VARCHAR>')
def key_value(pair: str):
    key, value = pair.split('=')
    return {'key': key, 'value': value}

# udf example that call external library
@udf(input_types=['real[]', 'real[]'], result_type='real')
def dot_vect(a, b):
    return np.dot(a, b)
```

5. Create a new migration file.

```sh
zillabase migration add create_function
```

6. Declare the function in the migration file.

```sql
CREATE FUNCTION gcd(int, int) RETURNS int
LANGUAGE python AS gcd;

CREATE FUNCTION key_value(varchar) RETURNS struct<key varchar, value varchar>
LANGUAGE python AS key_value;

CREATE FUNCTION dot_vect(real[], real[]) RETURNS real
LANGUAGE python AS dot_vect;
```

7. Run the project.

```sh
zillabase start
```

8. Connect to the database with PSQL.

```sh
psql -U root -d dev -h localhost -p 4567
```

::: info
If you don't have psql installed, install it with the following commands:

Debian:

```sh
sudo apt-get install -y postgresql-client
```

MacOS:

```sh
brew install libpq
```

:::

9. Run a query.

```sql
select gcd(12, 4);

select key_value('KEY=VALUE');

select dot_vect('{1.0, 2.0}', '{3.0, 4.0}');
```

10. Stop the project.

```sh
zillabase stop
```

::: info
Refer to [this repository](https://github.com/aklivity/zillabase/tree/develop/examples/udf.python) for a more complete UDF Python example.
:::

## External User-Defined Functions in Java

To declare the function in Java, we'll use the `risingwave-udf` package. Your function will need to implement an interface to expose it as UDF. You can also add additional packages to the Maven project. After that, you need to declare the function in a migration file.

::: info
Any external UDFs written in Java must be in a Maven project form and stored in `zillabase/functions/java` directory in order to be auto-picked by the Java UDF server.
:::

### Adding Environment Variables

You can add environment variables during UDF execution by modifying the `config.yaml` file. For example:

```yaml
udf:
  java:
    env:
      - MY_VAR=value
```


### Example

Before we start, make sure you have the following requirements installed:

- Java Developer's Kit (JDK) version 11 or later.

- Apache Maven 3.0 or later.

These steps will walk you through the UDF example in Java.

1. Create an empty folder.

```sh
mkdir udf-java # create a new folder
cd udf-java # change the current directory
```

2. Initialize an empty Zillabase project.

```sh
zillabase init
```

3. Create and go to `zillabase/functions/java` folder.

```sh
mkdir -p zillabase/functions/java

cd zillabase/functions/java
```

4. Fill in the `pom.xml` file with the following contents.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.aklivity.zillabase</groupId>
  <artifactId>risingwave-udf-example</artifactId>
  <version>0.1.0-SNAPSHOT</version>

  <name>udf-example</name>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>

  <dependencies>
    <!-- https://mvnrepository.com/artifact/com.risingwave/risingwave-udf -->
    <dependency>
      <groupId>com.risingwave</groupId>
      <artifactId>risingwave-udf</artifactId>
      <version>0.2.1</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.0.0</version>
        <configuration>
          <argLine>--add-opens=java.base/java.nio=ALL-UNNAMED</argLine>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-assembly-plugin</artifactId>
        <version>3.4.2</version>
        <configuration>
          <archive>
            <manifest>
              <mainClass>io.aklivity.zillabase.UdfExample</mainClass>
            </manifest>
          </archive>
          <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
          </descriptorRefs>
          <finalName>risingwave-udf-example</finalName>
          <appendAssemblyId>false</appendAssemblyId>
        </configuration>
        <executions>
          <execution>
            <id>udf-example</id>
            <phase>package</phase>
            <goals>
              <goal>single</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

5. Create `src/main/java/io/aklivity/zillabase` folder.

```sh
mkdir -p src/main/java/io/aklivity/zillabase
```

6. Create `UdfExample.java` in the `src/main/java/io/aklivity/zillabase` path with the following contents.

```java
package io.aklivity.zillabase;

import java.util.Iterator;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import com.risingwave.functions.ScalarFunction;
import com.risingwave.functions.TableFunction;

public class UdfExample
{
    public static class Gcd implements ScalarFunction
    {
        public int eval(int a, int b)
        {
            while (b != 0)
            {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
    }

    public static class ArrayAccess implements ScalarFunction
    {
        public String eval(String[] array, int index) {
            return array[index - 1];
        }
    }

    public static class Series implements TableFunction
    {
        public Iterator<Integer> eval(int n) {
            return IntStream.range(0, n).iterator();
        }
    }

    public static class Split implements TableFunction
    {
        public static class Row
        {
            public String word;
            public int length;
        }

        public Iterator<Row> eval(String str)
        {
            return Stream.of(str.split(" "))
                    .map(
                            s -> {
                                Row row = new Row();
                                row.word = s;
                                row.length = s.length();
                                return row;
                            })
                    .iterator();
        }
    }
}
```

7. Create a new migration file.

```sh
zillabase migration add create_function
```

8. Declare the function in the migration file.

```sql
CREATE FUNCTION gcd(int, int) RETURNS int LANGUAGE java AS gcd;

CREATE FUNCTION array_access(varchar[], int) RETURNS varchar LANGUAGE java AS array_access;

CREATE FUNCTION series(int) RETURNS TABLE (x int) LANGUAGE java AS series;
```

9. Run the project.

```sh
zillabase start
```

10. Connect to the database with PSQL.

```sh
psql -U root -d dev -h localhost -p 4567
```

::: info
If you don't have psql installed, install it with the following commands:

Debian:

```sh
sudo apt-get install -y postgresql-client
```

MacOS:

```sh
brew install libpq
```

:::

11. Run a query.

```sql
select gcd(12, 4);

select array_access('{"first", "second", "third"}', 2);

select series(5);
```

12. Stop the project.

```sh
zillabase stop
```

::: info
Refer to [this repository](https://github.com/aklivity/zillabase/tree/develop/examples/udf.java) for a more complete UDF Java example.
:::