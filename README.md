# user-ride-api

A RESTful API that serves user data and their rides. Built with TypeScript, Express.js, PostgreSQL, and TypeOrm

## Usage

### Installing Dependencies
After cloning the repo, go ahead and install all the dependencies:

```
yarn
```

### Starting The Server in Development Environment
Before starting the server, the project needs a *.env* file at the root of the project. All the necessary variables are listed in *.env.example* at the root of the project.

```
PORT=
DATABASE_URL=
```

Then, to start TypeScript compiler in watch mode:
```
yarn watch
```

And to run the compiled js in watch mode:
```
yarn dev
```

If the provided database is empty, the following script can add a starting data. But only run this after compiling and starting the server.
```
yarn init-db
```

### Routes
This API supports requests to a single route, `/api/user`, that returns a list of users stored in the database.

Response:

```JSON
[
  { "id":1, "first_name": "jaka", "last_name": "tingkir" },
  { "id":2, "first_name": "tengku", "last_name": "umar" }
]
```

It also accepts a query string with `relation` key. Currently only supports the value `rides`, and is used to return a list of users along with their associated rides. The url would be as such: `/api/user?relation=rides`

Response:
```JSON
[
  {
    "id": 1,
    "first_name": "jaka",
    "last_name":"tingkir",
    "rides":[]
  },
  {
    "id": 2,
    "first_name": "tengku",
    "last_name":"umar",
    "rides": [
      { "id": 1, "from_city_name": "Bandung", "to_city_name": "Jakarta" }
    ]
  }
]
```
