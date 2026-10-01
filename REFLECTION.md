# Week 1 Reflection

### 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
In an **imperative** approach (such as plain DOM manipulation or jQuery), you have to write step-by-step instructions telling the browser *how* to find elements, create nodes, and manually update text or classes whenever data changes (e.g., `document.getElementById(...)`, `btn.textContent = ...`). This easily leads to out-of-sync state and spaghetti code.

In a **declarative** approach (React), you describe *what* the UI should look like for a given state (`UI = f(state)`). When the underlying data changes, React automatically re-evaluates the component, diffs the virtual DOM, and updates only the necessary DOM elements for you.

### 2. Why must a component name start with a capital letter?
In JSX, React uses capitalization to distinguish between built-in HTML elements (like `<div>`, `<header>`, `<h1>`) and custom user-defined components (like `<Header />`, `<VendorCard />`). If a component starts with a lowercase letter (e.g., `<welcome />`), React treats it as an unknown native HTML element rather than calling the component function.

### 3. What does a fragment `<>...</>` do, and why not just use a `<div>`?
A React component must return a single root element so that the JavaScript function returns a single expression tree. A fragment (`<>...</>` or `<React.Fragment>...</React.Fragment>`) lets you group multiple sibling elements together without creating an extra, unnecessary DOM wrapper node. Using a `<div>` instead would add clutter to the DOM tree, potentially disrupt CSS layouts (such as Flexbox or CSS Grid), and affect semantic markup.

### 4. Name one benefit of splitting the UI into small components.
Splitting the UI into small components promotes **reusability and maintainability**. Each component encapsulates its own structure, style, and logic, making it easier to read, test, debug, and reuse across multiple pages without duplicating code.
