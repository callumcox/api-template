# Express API Template

A template for creating an Express based API (intended to speed up the initial steps creating an Express based API).

## What does it use?

This template uses:

- Node
- Express
- Helmet
- ESLint
- Prettier
- Husky

There are other packages included but these mainly support the development process.

## Usage

As this is intended to be a starting point for an application, you can either:

1. Fork this repository
2. Clone this repository and change the upstream to point to your own repository
3. Download the contents and include them in your own repository

### Development

To run this locally, first install the dependencies:

```bash
npm i
```

Finally run:

```bash
npm run dev
```

This will start up the server (by default on port 8080) and watch any files for changes. On change the server will, restart and your changes should be reflected.

### Tests

Tests are performed using Jest. To run tests use:

```bash
npm run test
```

To watch files use:

```bash
# Watch and run tests related only to the changed files
npm run test -- --watch

# Watch and run tests related to all files
npm run test -- --watchAll
```

### Linting

Linting is done through Prettier & ESLint with the eslint-prettier-plugin and eslint-prettier-config enabled to prevent conflicts. The base configuration can be found in package.json.

### Commits

When you're ready to commit, a pre-commit hook will lint the staged files and attempt to fix any linting errors. If there are any errors you won't be able to commit. When you're ready to push a commit, a pre-push hook will run the tests, with any errors preventing you from pushing your commit.
