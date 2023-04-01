# Banking Platform

## Description
A banking system built with MERN stack, and uses API's. This banking system enables ten main different flows or implementations:
1. Main Webpage: The main webpage is the first page that a user sees when they visit our website. This page has option to SignUp/Login
2. SignUp Page > Login
3. Login > Dashboard
4.  Dashboard > My profile > Displaying all the necessary information of users 
5.  Dashboard > Transactions > Money transfer between any two users
6.  Dashboard > Transactions History > Information of all the transactions that takes place including date & time 
7.  Dashboard > My Accounts > Information of all the accounts of a particular user
8.  Dashboard > Account Statement > 
9.  Dashboard > Analytics > Information about income and expenditure
10. Dashboard > Settings > Option to edit password

* Features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components

## Install
Some basic Git commands are:
```
$ git clone <repository link> 
$ cd project
$ npm install
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Language & Tools
* [Node](https://nodejs.org/en/ "Node title") An open-source JavaScript run-time environment for executing server-side JavaScript code.
* [Express](https://expressjs.com/ "Express title") Express.js: It is a popular Node.js framework that provides a set of tools and libraries for building web applications. Express.js is used to create RESTful APIs for the MERN project.
* [Mongoose](https://mongoosejs.com/ "Mongoose title") It is an Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose is used to create models, schemas, and handle data validation for the MongoDB database. The databases defined for this are User database, Bank database and Payment database.
* [React](https://reactjs.org/ "React title") React is a free and open-source front-end JavaScript library for building user interfaces based on components.
