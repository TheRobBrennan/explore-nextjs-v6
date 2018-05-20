# Overview
This feature was inspired by the [nextjs-auth0 demo](https://github.com/luisrudge/next.js-auth0.git) at [https://github.com/luisrudge/next.js-auth0.git](https://github.com/luisrudge/next.js-auth0.git).

# Getting started
## Setup
There are several key steps required to get this demo to work:
+ [Auth0](https://auth0.com)
  - Create an account (if you do not have one already)
  - Create a new application
+ Local environment

### Auth0
#### Create an account
If you do not have an account with [Auth0](https://auth0.com), please create one before continuing.

#### Create a new application
Generally speaking, there are a handful of steps to follow in order to create a new application for your [Auth0](https://auth0.com) account.

##### Application settings on Auth0
When presented with the Create Application screen, you will need to:
+ Give the application a human friendly name (e.g. `DEMO: NextJS v6`)
+ Choose `Single Page Web Applications` as the application type
+ Click `Create`
+ Choose `React` as the technology you are using for the web app

When you view the settings for your newly created application (referred to as `DEMO: NextJS v6` in this guide), you will want to be sure the following fields are configured as desired:
+ Application Type - `Single Page Application`
+ Allowed Callback URLs (1) - `http://localhost:3000/auth/signed-in`
+ Allowed Web Origins (2) - `http://localhost:3000`
+ Allowed Logout URLs (3) - `http://localhost:3000`
+ Allowed Origins (CORS) (4) - `http://localhost:3000`

(1) - You will need to add additional comma separated URLs once you deploy to other sites (e.g. `https://mysite.com/auth/signed-in`)
(2) - You will need to add additional comma separated URLs once you deploy to other sites (e.g. `https://mysite.com`)
(3) - You will need to add additional comma separated URLs once you deploy to other sites (e.g. `https://mysite.com`)
(4) - You will need to add additional comma separated URLs once you deploy to other sites (e.g. `https://mysite.com`)

##### Application settings for this project
Once you have created a new application on [Auth0](https://auth0.com), please copy the contents from `config.sample.json` into `config.json`. The demo application will use `config.json` for the appropriate domain and key information provided to you by [Auth0](https://auth0.com).

It should go without saying, but your `config.json` file **SHOULD NOT BE CHECKED INTO SOURCE CONTROL AT ALL**.

### Local environment
To get started with this branch, simply clone the project repo and run the development server by running:

#### Clone the repository
    $ git clone git@github.com:TheRobBrennan/demo-nextjs-v6.git

#### Install dependencies
    $ cd demo-nextjs-v6
    $ npm install

#### Start the development server
    $ npm run dev
