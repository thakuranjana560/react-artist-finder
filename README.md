# React Atomic Design Pattern
# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Setup

1. Clone the project.
2. Copy `.env.example` to `.env`
3. Obtain an API key from [last.fm](https://www.last.fm/api/). Use your key as your `REACT_APP_API_KEY` value in `.env`.
4. Install dependencies with `yarn`
5. Start server with `yarn start`
    > App will be served at http://localhost:3000/

## Yarn Scripts

In the project directory, you can run the following scripts:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Run [ESLint](https://eslint.org/) to check for any problems in your JavaScript code.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

A responsive web app that lets you search for an artist, see a short biography and list of top albums, and gives you the option to save the artist to a list of your favorite artists. This app uses the [last.fm API](https://www.last.fm/api).

Note, there are no database connections. Any artists you save to your list of favorites will only persist over the course of your session. 😊

This app also uses an authentication flow, so you will need a [last.fm](https://www.last.fm/) account in order to proceed. Authentication is not actually needed to use the last.fm API, however, it was a requirement for this project.

## ⚡️ Technologies

-   React
-   TypeScript
-   Styled Components
-   React Context API
-   React Router
-   React Spring
-   React Testing Library
-   Jest

## ✅ Requirements

-   Obtain an authentication token through [last.fm](https://www.last.fm/)
-   Build a search input that enables a user to search for their favorite artist
-   After searching for an artist a list of relevant artists should populate the page
-   A user should be able to select an artist from the search page that will show biographical information (feel free to include discography)

## ✏️ User stories

-   A user can log in using last.fm
-   A user can search for an artist and see search results
-   A user can select an artist and see their biography and top albums
-   A user can add an artist to their list of favorites
-   A user can remove an artist from their list of favorites
-   A user can log out of their account
