# Week 1 Reflection

### 1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
In an **imperative** approach (such as plain DOM manipulation or jQuery), the developer writes step-by-step instructions directing the browser on *how* to locate elements, create nodes, and manually update text or classes whenever data changes (e.g. `document.getElementById(...)`, `btn.textContent = ...`). This easily leads to inconsistent UI state and difficult-to-maintain code as applications grow.

In a **declarative** approach (React), the developer describes *what* the UI should look like for any given state (`UI = f(state)`). When underlying data or props change, React re-renders the component, efficiently computes differences using the Virtual DOM, and updates only the necessary real DOM nodes.

### 2. Why must a component name start with a capital letter?
In JSX, React distinguishes between built-in HTML elements (such as `<div>`, `<header>`, `<h1>`) and custom user components (such as `<Header />`, `<VendorCard />`) based on capitalization. If a component name starts with a lowercase letter (e.g., `<welcome />`), React treats it as an unknown native HTML element rather than invoking the custom component function.

### 3. What does a fragment `<>...</>` do, and why not just use a `<div>`?
A React component function must return a single root JSX element to satisfy JavaScript function expression syntax. A fragment (`<>...</>` or `<React.Fragment>...</React.Fragment>`) allows multiple sibling elements to be grouped together without rendering an extra, unnecessary DOM wrapper node. Using a `<div>` instead would add redundant DOM nesting, disrupt CSS layouts (such as Flexbox or CSS Grid), and reduce semantic clarity.

### 4. Name one benefit of splitting the UI into small components.
Splitting the UI into small, focused components enhances **reusability and maintainability**. Each component encapsulates its own structure and presentation, making individual pieces of the interface easier to read, test, debug, and reuse across different parts of the application without duplicating code.
