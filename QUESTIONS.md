### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

The main difference between a `Component` and a `PureComponent` in React is that the latter only re-renders if its props or state have changed. This can save some performance overhead.

Using a `PureComponent` might break an app if its props or state are mutated directly, as this will not trigger a re-render and the component will display outdated information.

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Using `Context` with `shouldComponentUpdate` can be dangerous because the shouldComponentUpdate method is not called when the context changes.

### 3. Describe 3 ways to pass information from a component to its PARENT.

- props
- callback functions
- context

### 4. Give 2 ways to prevent components from re-rendering.

- using `React.memo`
- `useCallback` hook

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group elements together in React without creating an additional DOM element. It's useful when you need to return multiple elements from a component without having to wrap them in a parent element.

### Give 3 examples of the HOC pattern.

- authentication
- routing
- theming

### what's the difference in handling exceptions in promises, callbacks and async...await.

- promises: When an error occurs in a function that uses Promises, the Promise is rejected with the error. You can handle the error using the `.catch()` method or by chaining another `.then()` method with a rejection handler.
- callbacks: It is up to the developer to handle the error in the callback function. If the error is not handled, it may result in an unhandled exception.
- async / await: When an error occurs in a function that uses async/await, an exception is thrown and you can handle the error using a `try / catch` block.

### How many arguments does setState take and why is it async.

Can take two arguments depending on how it's called, and those arguments are an object containing the new state values and a function that returns an object containing the new state values.

### List the steps needed to migrate a Class to Function Component.

- remove the constructor
- replace lifecycle methods
- remove / refactor any `this` being used

### List a few ways styles can be used with components.

- CSS classes
- inline styles
- css-in-JS libraries

### How to render an HTML string coming from the server.

You can use `dangerouslySetInnerHTML`, but it is important to sanitize the content before using it.
