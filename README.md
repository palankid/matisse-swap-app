# Matisse Swap Application Code Challenge

## Justifications

- Validation is very basic, I would have approached it with a more complex solution (i.e. Formik with yup library) if the application would have more input fields.
- I would have included more tests, including component tests with React Testing Library as well as e2e tests with Playwright if the primary aim of the exercise would not just have been to create components and high level component interactions.
- Exchange rate helper text below the "To" field utilizies a static number
- I have done the customization of components from 2 main directions, either via modifying the global theme, or by modify a specific component's design through the sx prop.
- Introducing Redux for state management might look unnecessary, however Redux Toolkit is a very smart solution that does not require any effort to connect it with the application, and it's very easy and straightforward to use. In my opinion Context would require more effort to make it work nearly as simple as Redux.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all required dependencies.

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run storybook`

Launches Storybook at [http://localhost:6006](http://localhost:6006).\
Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases.

### `npm run build`

Builds the app for production to the `build` folder.\
It bundles React in production mode and optimizes the build for the best performance.
