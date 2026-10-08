# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): Antigravity (Gemini 3.8 Flash)
- What I asked for: Assist in setting up the project repository according to the Week 1 lab guide, cleaning the Vite starter boilerplate, configuring the starter CSS, and building the initial CampusEats components.
- What I kept, changed or rejected, and why: Kept the clean component separation (Header, VendorCard, MenuItemCard, Footer) and JSX formatting with semantic classes and ternary operators for dynamic display.
- One thing the AI got wrong and how I fixed it: App.jsx still attempted to import deleted assets from the initial Vite template; removed the unused imports and replaced with clean JSX.

## Week 2
- Tool(s): Antigravity (Gemini 3.8 Flash)
- What I asked for: Assist in making CampusEats data-driven following Part C of the Week 1+2 checklist (vendors data, props, lists with .map(), switching vendors with state, and cart badge updates with onAdd).
- What I kept, changed or rejected, and why: Kept the immutable state update pattern `setCart((prev) => [...prev, item])` instead of mutating arrays directly, and kept passing `onAdd` callback from App through MenuList to MenuItemCard. Used actual Mahallah Faruq and Mahallah Aminah stall data.
- One thing the AI got wrong and how I fixed it: MenuItemCard button onClick initially needed an inline arrow function `() => onAdd(item)` to prevent premature execution during render; verified it properly fires only upon click.
