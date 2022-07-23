
# Node.js Mailer 📨

This project's main functionality is to send emails through the lib nodemailer, 
the application has automatic deployment on Heroku performed through the GitHub Actions, 
with all sensitive data protected in GitHub Secrets.
## Running locally 🏠

Clone the project
```bash
  git clone https://github.com/BrunoSGomes/nodejs-mailer.git
```

Enter the project directory
```bash
  cd nodejs-mailer
```

Install the dependencies
```bash
  npm ci
```

Create an .env file (follow the .env.example)
```bash
  # E-mail config
  EMAIL_HOST= Your e-mail host
  EMAIL_PORT= Your e-mail host port
  EMAIL_SECURE= true or false if your e-mail has security (true most of cases)
  EMAIL_USER= Your e-mail
  EMAIL_PASSWORD= Your e-mail password
```

Start the server
```bash
  npm run start:dev
```

Test the application by sending a get request to localhost:3000
## Running tests and style checking 🪄

To run the code style check
```bash
  npm run style
```

To run the code style correction
```bash
  npm run style:fix
```

To run the tests
```bash
  npm run test
```
## Deploy 📦

First you need to create a repository on GitHub and a Node.js project on Heroku, 
after that, you will need to set the secrets that will be used in the GitHub Actions 
deployment workflow and also set the environment variables inside the Heroku project.

So first, with the GitHub repository created, let's set the following secrets
```bash
  Name: ENV_VAR
  Value:
        # E-mail config
        EMAIL_HOST= Your e-mail host
        EMAIL_PORT= Your e-mail host port
        EMAIL_SECURE= true or false if your e-mail has security (true most of cases)
        EMAIL_USER= Your e-mail
        EMAIL_PASSWORD= Your e-mail password
  
  Name: HEROKU_API_KEY
  Value: Your Heroku API Key

  Name: HEROKU_APP_NAME
  Value: Your Heroku application name

  Name: HEROKU_EMAIL
  Value: Your Heroku e-mail
```

Second, let's set the following environment variables in the Heroku project (same as local)
```bash
  Name: EMAIL_HOST
  Value: Your e-mail host

  Name: EMAIL_PORT
  Value: Your e-mail host port

  Name: EMAIL_SECURE
  Value: true or false if your e-mail has security (true most of cases)

  Name: EMAIL_USER
  Value: Your e-mail

  Name: EMAIL_PASSWORD
  Value: Your e-mail password
```
Now just push the project to master on GitHub
## API Documentation 📜

#### Sends an email to the recipient defined in the .env

```http
  POST /email/send
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Mandatory**. E-mail of the person |
| `name` | `string` | **Mandatory**. Name of the person |
| `telephone` | `string` | **Mandatory**. Telephone of the person |
| `message` | `string` | **Mandatory**. A message |
