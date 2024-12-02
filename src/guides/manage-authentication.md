# Managing Authentication

Zillabase utilizes Keycloak to manage its user authentication. The Keycloak was configured through a `config.yaml` file and initialized during the `zillabase start` command. Follow this guide to learn how Keycloak is integrated with Zillabase and how to implement authentication in your application.


## How it works

If a Keycloak configuration is found, Zillabase will set up Keycloak during the start-up process and protect every available Zillabase endpoint. Otherwise, Zillabase won't set up Keycloak, and every endpoint is accessible by every user.

To authenticate to protected endpoints, you'll need to provide an access token as the token bearer in the HTTP authorization header. This token is obtained by authenticating via the Keycloak service.

Use Keycloak adapter libraries, such as [`keycloak-js`](https://www.keycloak.org/securing-apps/javascript-adapter) to easily integrate Keycloak with your application.


## Keycloak Configuration

### Available Config

You can set up Keycloak by providing the following configuration in `zillabase/config.yaml` file.

| **Key**                   | **Type**  | **Required** | **Description**                                                                                |
| ------------------------- | --------- | ------------ | ---------------------------------------------------------------------------------------------- |
| keycloak.realm            | string    | Yes          | Represents the unique identifier of the Keycloak client.                                       |
| keycloak.scopes           | string\[] | No           | The scopes that will be assigned to the application realm.                                     |
| keycloak.client.client-id | string    | Yes          | The keycloak client ID                                                                         |
| keycloak.client.origins   | string\[] | No           | A list of allowed origins for CORS (Cross-Origin Resource Sharing). Default value is \["\*"].  |
| keycloak.client.root      | string    | No           | The base URL of the client application.                                                        |
| keycloak.client.redirects | string\[] | No           | A list of URLs to which Keycloak can redirect after user authentication or logout.             |
| keycloak.client.secret    | string    | No           | The client secret for confidential clients.                                                    |
| keycloak.users            | User\[]   | No           | Users object that will be seeded during project initialization.                                |

For the secret value, you can provide env instead of putting the secret directly with the following format: `${{ env.SECRET_ENV_KEY }}`.


### Seeding User

You can provide a predefined user object that will be registered during the project initialization process. These users will be assigned to the application realm instead of the master realm. The user object must have the following properties.

| **Key**  | **Description**      |
| -------- | -------------------- |
| username | The user's username. |
| email    | The user's email.    |
| password | The user's password. |
| name     | The user's name.     |

::: info
Users seeded from keycloak configuration are different and not related to the one that was seeded or defined in migration or `seed.sql`.
:::

### Default Configuration

| **Name**             | **Value**                      |
| -------------------- | ------------------------------ |
| Keycloak Service URL | `http://localhost:8180`        |
| Default/Admin Realm  | master                         |
| Admin Credential     | username: `admin` <br/> password: `admin` |


## Obtaining Authenticated User

To obtain an authenticated user on view or stream, you can use `zilla_identity` variable in the query. For example:

```sql
-- zilla_identity in view
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

-- zilla_identify in stream
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

We also provide `zilla_correlation_id` and `zilla_timestamp` in case you need it.

## Managing Single Sign On (SSO)

You can provide additional single sign-on options for Keycloak service through the Zillabase CLI. In general, you'll need to provide the following information to add an SSO provider.

| **Name**    | **Description**                                                   |
| ----------- | ----------------------------------------------------------------- |
| provider-id | The unique identifier for the identity provider to be integrated. |
| alias       | The alias name for the Single Sign-On (SSO) provider.             |
| client      | The name of the client application to be configured.              |
| realm       | The Keycloak realm in which the integration will take place.      |
| secret      | The secret key is used to authenticate with the SSO provider.     |

The client and realm values are the ones that you defined before in Zillabase `config.yaml`. Here are some of the provider IDs that are supported:

| **Name**                | **Provider ID** |
| ----------------------- | --------------- |
| Google                  | google          |
| Facebook                | facebook        |
| Twitter                 | twitter         |
| Generic Open ID Connect | oidc            |
| SAML Providers          | saml            |

::: info
Please refer to the Keycloak or the other providers' documentation to get more complete provider IDs that are supported.
:::

### Example

1. Prepare a Zillabase project that has Authentication set up.

2. Add an SSO provider.

```sh
# adjust the values depending on your case
zillabase sso add --provider google --client aktivity --alias google --realm zillabase --secret secret

# output
# Identity Provider added successfully
```

3. List the SSO providers.

```sh
zillabase sso list --realm zillabase

# output
# [{"alias":"google","internalId":"b288c0bd-0ad4-44a9-b103-363a4b8f2997","providerId":"google","enabled":true,"updateProfileFirstLoginMode":"on","trustEmail":false,"storeToken":false,"addReadTokenRoleOnCreate":false,"authenticateByDefault":false,"linkOnly":false,"hideOnLogin":false,"config":{"syncMode":"LEGACY","clientSecret":"**********","clientId":"aktivity"}}]
```

4. To remove an SSO provider, use the following command.

```sh
# adjust the values depending on your case
zillabase sso remove --realm zillabase --alias google

# output
# The Identity Provider was successfully deleted
```