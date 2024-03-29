# T3000 API

T3000 API,This is the API for interacting with the building database, you will need to install it to run and use the [T3000 web client](https://github.com/temcocontrols/T3000_Client). 

The API by itself does not have any functionality, but it serves as a platform to run the web-based T3000 client. In other words, the API is utilized as a foundation for the T3000 client to perform its operations. The T3000 client leverages the API's framework to access the necessary resources and execute the functions required to achieve the intended goals. Thus, the API is a crucial component in the overall architecture of the T3000 client system.

[https://github.com/temcocontrols/T3000_Client](https://github.com/temcocontrols/T3000_Client)


## Important note

At the moment, the ongoing work does not involve any integration with the Bacnet stack or implementation of any T3000-specific functionality. However, we are working on incorporating more functions into the project as we move forward.


## Installation

### Server Requirements

The minimum server requirements to install this API are:

- 4 GB of free disk space
- Single-core CPU
- 64 bit Linux
- A Ubuntu server with a minimum of 1 GB RAM

### Installing the API on Rock Pi 4 

#### Rock Pi 4 Getting started

First of all you should follow the official instructions to see how you can get your Rock Pi ready:

[https://wiki.radxa.com/Rockpi4/getting_started](https://wiki.radxa.com/Rockpi4/getting_started)

#### Rock Pi 4 Downloads

In this page we are gonna choose Ubuntu Server 20.04 as the operation system, but you can pick whatever Linux distro you like from here:

[https://wiki.radxa.com/Rockpi4/downloads](https://wiki.radxa.com/Rockpi4/downloads)

#### Rock Pi 4 Network Connection

After you get your Rock Pi ready, you should connect the device with Internet because we need to install some necessary packages, you can connect to the internet via WiFi or by Ethernet cable, for that you can also follow the official Wiki to see how you can do that:

[https://wiki.radxa.com/Rockpi4/Ubuntu#Network_Connection](https://wiki.radxa.com/Rockpi4/Ubuntu#Network_Connection)

#### Access Rock Pi 4 from the Host PC/Laptop using SSH

SSH server is enabled on port 22 of ROCK Pi 4 default image.

```
ping ip-of-device
ssh rock@ip-of-device
```

Check the official documentation for more:

[https://wiki.radxa.com/Rockpi4/Ubuntu#Access_from_the_Host_PC.2FLaptop](https://wiki.radxa.com/Rockpi4/Ubuntu#Access_from_the_Host_PC.2FLaptop)

**The rest of the steps can work on any Ubunto device not just on the Rock Pi**

### Clone the API repository

We first clone the API repository like this:

```
cd ~
git clone https://github.com/temcocontrols/T3000-API.git
cd T3000_API
```

### A. Install using the install script

We have built a script to make it easy to install the API, you can just run it and it will take care of everything for you, just run the following on the terminal

```
sudo ./install.sh
```

If everything went well then you are ready to run the API check the [Starting the API section](#starting-the-api) below.


You can also install the API manually if you don't want to use the install script by following the steps below.

### B. Install the API manually ( if you don't want to use the install script )

#### Installing the necessary packages

After you get your Rock Pi connected to the internet run the following to install Git and Curl:

```
sudo apt update -y
sudo apt install curl git -y
```

#### Installing Node JS

Now we are going to install Node JS 20.x like this:

```
cd ~
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg -y
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
```

Refer to the [NodeSource documentation](https://github.com/nodesource/distributions/blob/master/README.md) for more information on the available versions.


The PPA will be added to your configuration and your local package cache will be updated automatically. You can now install the Node.js package:

```
sudo apt install nodejs
```

Verify that you’ve installed the new version by running `node` with the `-v` version flag:

```
node -v
```

```
Output
v20.5.1
```

#### Installing PostgreSQL & creating/preparing the database

install the Postgres package along with a `-contrib` package that adds some additional utilities and functionality:

```
sudo apt install postgresql postgresql-contrib
```

Ensure that the service is started:

```
sudo systemctl start postgresql.service
```

The installation procedure created a user account called **postgres** that is associated with the default Postgres role. There are a few ways to utilize this account to access Postgres. One way is to switch over to the **postgres** account on your server by running the following command:

```
sudo -i -u postgres
```

Then you can access the Postgres prompt by running:

```
psql
```

Now we need to create a role and database to let the API use to store the data, in the following sql code we will create a role with this name `t3000`, feel free to pick another name if you want, the same for the role we will use `t3_api` as the role name, you can pick any name you want, **and the most important thing,** don't forget to change `your_password` to a strong password, this password will be used by the API to connect to the database:

```plsql
CREATE DATABASE t3_api;
CREATE ROLE t3000 WITH LOGIN NOSUPERUSER INHERIT CREATEDB NOCREATEROLE NOREPLICATION PASSWORD 'your_password';
GRANT CONNECT ON DATABASE t3_api TO t3000;
GRANT ALL PRIVILEGES ON DATABASE t3_api TO t3000;
```

After you execute the above sql query, we can exit from the psql by writing `exit;` and press enter then write `exit` and press enter again to go back to our normal ubuntu user:

```
exit;

exit
```

#### Installing the API

At first make sure you are on the right directory:

```
cd ~/T3000_API
```

Then we install & build the API:

```
npm install
npm run build
```

After this finish we will need to configure the API to connect to the PostgreSQL database, the API use `.env` file to store the database connection URL and some other configurations, so first we will copy the `.env-example` file to `.env` then we will open it by nano text editor like this:

```
cp .env-example .env
nano .env
```

you will see the file content like this:

```
ACCESS_KEY=your_access_key

DATABASE_URL=postgres://username:password@localhost:5432/db_name

PORT=3000

```

As you see, you just need to fill it with the database connection info that we just created above, db user name (`t3000` in our example) and replace `password` with your password  and the database name in our example is`t3_api`, 

And don't forget to fill the access key with a strong password like text, because it will be used to protect the API, so our `.env` file content will look like this:

```
ACCESS_KEY=your_access_key

DATABASE_URL=postgres://t3000:your_password@localhost:5432/t3_api

PORT=3000
```

When you finish press `CTRL` + `X` then `y` and press `Enter` twice to save the changes.

#### Creating the API tables in the database

Use this command to auto create the required tables in the database

```
npm run prisma:db-push
```

#### Starting the API

Now you can run the API like this:

```
npm start
```

When the API start successfully, you will see your API URL like in the following example (Note that, the IP addresses might be different in your device ):

```
🚀 API ready at:
http://192.168.1.14:3000/graphql
http://127.0.0.1:3000/graphql

🚀 API graphql explorer ready at:
http://192.168.1.14:3000/graphiql
http://127.0.0.1:3000/graphiql
```

As you see you will get multiple urls to use, the first one will work only on the Pi itself and the other/s depend on your local network, You can access the API from any device in the same network as your API Pi, just make sure that your device is connected to the same network as your API.

## Exploring the GraphQL API Endpoint

In the previous steps, we obtained the API GraphQL explorer endpoint, which is shown as follows (Note that, the IP addresses might be different in your device ):

```
🚀 API graphql explorer ready at:
http://192.168.1.14:3000/graphiql
http://127.0.0.1:3000/graphiql
```

Upon accessing this explorer through a web browser, you will be presented with the GraphiQL IDE. This browser-based interface allows interactive exploration of the GraphQL API's capabilities, enabling you to execute queries seamlessly against the API. for more info check the official documentation from here:

[https://github.com/graphql/graphiql/blob/main/packages/graphiql/README.md](https://github.com/graphql/graphiql/blob/main/packages/graphiql/README.md)

## API Architecture Overview

This API will work as a middleware between the client and the controllers in your system so the client will interact with it to send commands to the controllers, The API is written in TypeScript. It maintains its state in a PostgreSQL database using Prisma ORM using GraphQL query language.

## GraphQL

The API is powered by a GraphQL. GraphQL is a query language that allows clients to talk to an API server. Unlike REST, it gives the client control over how much or how little data they want to request about each object and allows relations within the object graph to be traversed easily.

To learn more about GraphQL language and its concepts, see the official [GraphQL website](https://graphql.org/).

The API endpoint is available at `/graphql/` and requires queries to be submitted using HTTP `POST` method and the `application/json` content type.

Using the GraphQL API allows you to query and modify all of the data in an efficient and flexible manner.

Here's an example query to fetch apps:

```graphql
{
  projects {
    name
  }
}
```

Response:

```json
{
  "data": {
    "projects": {
      "name": "Project 1"
    }
  }
}
```

## Full API documentation

For the full documentation check [the web documentation](https://temcocontrols-t3000-api-docs.netlify.app/)
