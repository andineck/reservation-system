# reservation system

# prerequisites

install https://nodejs.org/en/download/

# get started

```sh
git clone ...
npm install
```

# environment variable

please feel free to set the following environment variables, in order to reflect your environment.

- TODO

# testing

run the postman tests in the test folder with https://www.getpostman.com/

# useful further readings

- for javascript, node.js, express.js, react.js, go to https://devdocs.io 

# db

postgres is used as database:
to install it as docker image:

```sh
docker pull postgres
docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres
docker ps
```

data access is done with the `pg-promise` library. 

- Readme: https://github.com/vitaly-t/pg-promise
- Examples: https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example#passing-arrays

### db structure


```sql
-- DROP TABLE public.instantreservation;
CREATE TABLE public.instantreservation (
	entrytime int8 NOT NULL,
	complete bool NOT NULL,
	players _text NOT NULL,
	game text NULL
);
```