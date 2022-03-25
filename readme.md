# BanQI Challenge API

This is a REST API based on clean architeture to BanQI Challenge.

## How to install

It's very simple. Just make sure you have npm on your machine.

```bash
# Install libs
$ npm install

# Build project
$ npm run build
```

## How to run

First, make sure you have set envs like the `.env.example` file. You may create a `.env` file on project root dir.

```env
DATABASE_URL=mysql://root:@localhost:3306/banqi
PORT=3000
```

If you are executing the application for the first time, remember to configure your database.

```bash
# Execute
$ npx prisma db push
```

Them, you can start the application

```bash
# Execute
$ npm start
```

## How to test

You can view the tests result and the code coverage.

```bash
$ npm run test
```

## Docs

You can view the application documentation on the route /api-docs

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
