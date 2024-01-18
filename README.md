# RSS GraphiQL Application

## Table of contents

- [General](#general)
- [Technologies](#technologies)
- [Workflow](#workflow)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Authors](#authors)
- [Gratitude](#gratitude)
- [Learn More](#learn-more)
- [License](#license)

## General

This app is a learning project [GraphiQL](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md) of the "JavaScript/Front-End 2023Q1" course run by Rolling Scopes School. The purpose of this project is to master and deepen knowledge in JavaScript / Front-end, to apply this knowledge in practice when developing an GraphiQL application. Also, the goal of the project is to master modern tools and frameworks used in the development of web applications.

## Technologies

Project is created with:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [GraphQL](https://graphql.org/)

## Workflow

We follow a high standard of code quality:

1. All code changes go through the Code Review process. Before changes are accepted, they must be approved by at least two project participants.
2. We provide at least 80% test coverage.
3. We use [Conventional Commits](https://www.conventionalcommits.org/).
4. We use Git Hooks to automate various processes when working with the repository:
   - `pre-commit`: Executes before a commit is made. Runs linting and other checks to ensure that only clean and formatted code is committed.
   - `pre-push`: Executes before a push to a remote repository. Verifies the quality of the pushed code, running tests.
   - `commit-msg`: Executes after entering a commit message. Enforces Conventional Commits standards for commit messages.

## Installation

1. Clone this repository to local computer.
2. Install all dependencies use `npm install`.
3. Create the project in [Firebase](https://firebase.google.com/). This is required to implement the authentication mechanism.
4. Save your API environment variables file (.env) in the project directory (check out `.env.template` file). Read more [here](https://vitejs.dev/guide/env-and-mode.html).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Locally preview the production build. Do not use this as a production server as it's not designed for it.

### `npm run test`

Perform a single run of all test suites without watch mode.

### `npm run test:watch`

Run all test suites but watch for changes and rerun tests when they change.

### `npm run coverage`

Perform a single run of all test suites without watch mode and generate a coverage report

### `npm run lint`

Runs a scan on your codebase using ESLint. During the scan, ESLint examines your JavaScript code files to identify potential errors, coding conventions violations, and stylistic issues. It applies a set of predefined rules or rulesets to analyze your code, providing feedback on areas that need attention or improvement.

### `npm run lint:fix`

Run this script to make ESLint not only to identify potential errors and violations but also automatically to fix as many of these issues as possible. It applies automatic code transformations to resolve common problems and align your code with the configured ruleset.

This command is useful when you want to quickly fix common issues in your codebase without manually going through each reported problem.

### `npm run style`

Runs a scan on your codebase using the Stylelint. Stylelint is a linter specifically designed for checking and enforcing consistent CSS or SCSS code styles and conventions.

When you execute this command, Stylelint analyzes your CSS or SCSS files and provides feedback on any issues it finds. It checks for violations of formatting rules, naming conventions, selector usage, and other CSS-related best practices.

Stylelint helps you maintain a consistent and readable codebase by flagging potential errors, inconsistencies, and bad practices in your CSS or SCSS code. It can highlight issues such as missing semicolons, invalid property values, duplicate selectors, unused styles, and much more.

### `npm run style:fix`

Run this script to make Stylelint not only to identify potential errors and violations but also automatically to fix as many of these issues as possible. It applies automatic code transformations to resolve common problems and align your code with the configured ruleset.

This command is useful when you want to quickly fix common issues in your codebase without manually going through each reported problem.

### `npm run format`

Runs a scan on your codebase using Prettier. Prettier analyzes the code files in the project and checks their formatting for compliance with the established rules. If the formatting does not comply with the rules, the command will generate appropriate errors or warnings.

### `npm run format:fix`

Run this script to make Prettier not only to identify potential errors and violations but also automatically to fix as many of these issues as possible. It applies automatic code transformations to resolve common problems and align your code with the configured ruleset.

This command is useful when you want to quickly fix common issues in your codebase without manually going through each reported problem.

### `npm run prepare`

Runs on local `npm install` without any arguments. This script runs `husky install`, needed to add a command to a Git hook or create a new one.

This project initialized Husky to manage Git hooks, automating tasks such as linting checks and code formatting during the commit process.

To add a command to a hook or create a new one, use `husky add <file> [cmd]`. More info [here](https://typicode.github.io/husky/getting-started.html#create-a-hook).

## Authors

- [Anton Astashov](https://github.com/antasth)
- [Elena Anisimova](https://github.com/ElenaAnisimova)
- [Iurii Bazhenov](https://github.com/BazhenovYN)

## Gratitude

We would like to express our sincerest gratitude to the [RS School](https://rs.school/) for the incredible training program and courses you have provided us. We cannot emphasize enough how valuable this experience has been for our personal and professional growth.The dedication and expertise of the instructors have exceeded our expectations, and we are truly grateful for their passion and commitment to delivering high-quality education. The skills and knowledge we have acquired during this program will undoubtedly shape our future careers.

## Learn More

- [RS School](https://rs.school/)
- [React documentation](https://react.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Firebase](https://firebase.google.com/)
- [GraphQL](https://graphql.org/)

## License

[MIT](./LICENSE)
