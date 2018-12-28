# Andy Mather FE-Project - ManyReads

## Front End React App

During week nine of the Northcoders Full Stack software development pathway course. I built ManyReads, which is a news gathering & discussion platform built using React.js. This front end application interacts with the A RESTful API i have created. Backend Github repo: https://github.com/AndyMather24/BE2-northcoders-news


This project has allowed me to utilise a range of some of skills that I have learnt throughout my time at Northcoders. I have been able to demonstrate my capabilities in the following React subjects: 

* React DOM
* React Lifecycle
* Setting State
* Passing Props
* React Routing
* Conditional Rendering
* Optimistic Rendering
* Error Handling


## Using NC News
Using Heroku I have deployed my project which can be found on following link: https://manyreads.netlify.com. 


## Functionality

### Logging in/Logging Out
Users can log in & out. For demonstration purposes, 'Grumpy19' is a placeholder in log in form. An option to log out is also available in the top right corner.

### Home
The home page is broken into two main sections. Articles which renders all the articles including votes and comments count. Authorised users may vote articles up or down. The second section is the dashboard component which allows a particular topic to be chosen. 

### Article 
The Article component displays particular article. Each article can also be accessed by clicking on the highlighted article

* the full article
* associated meta data:
* author
* publication date
* image
* vote and comment counts
* comments associated with the article

Authorised users can publish comments on the article and delete their own comments

### Post Article

This component allows an authorised user to publish a new article.

### Errors

Bad route errors result in the relevant 400/404 page.
API errors result in the API error status code and message being displayed to the user.

## Running a Local Copy

Follow these instructions to run a  a local copy on your local machine for testing purposes.

### Installing

Please ensure you have Node.js installed, to check if node is installed please type the following into your terminal.
```js
node -v
```

Duplicate or fork this repository from !!!!!

Inside this new directory, install the required NPM packages:

```js
npm install
```

### Run the application

To start the application, run this command in the CLI:

```js
npm start
```

If successful, your browser should open http://localhost:3000.

## Built With
* Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine
* React.js - JavaScript library for building user interfaces
* Axios - A promised based HTTP client for the browser and node.js.
* CSS 

## Developer
Andrew Mather
