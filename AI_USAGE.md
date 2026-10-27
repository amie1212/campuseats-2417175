
AI usage log

Using AI never costs marks; a vague or missing log does. Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

Week 1
Tool(s): Antigravity (Gemini 3.8 Flash)
What I asked for: Assist in setting up the project repository according to the Week 1 lab guide, cleaning the Vite starter boilerplate, configuring the starter CSS, and building the initial CampusEats components.
What I kept, changed or rejected, and why: Kept the clean component separation (Header, VendorCard, MenuItemCard, Footer) and JSX formatting with semantic classes and ternary operators for dynamic display.
One thing the AI got wrong and how I fixed it: App.jsx still attempted to import deleted assets from the initial Vite template; removed the unused imports and replaced with clean JSX.

Week 2
Tool(s): Antigravity (Gemini 3.8 Flash)
What I asked for: Assist in making CampusEats data-driven following Part C of the Week 1+2 checklist (vendors data, props, lists with .map(), switching vendors with state, and cart badge updates with onAdd).
What I kept, changed or rejected, and why: Kept the immutable state update pattern setCart((prev) => [...prev, item]) instead of mutating arrays directly, and kept passing onAdd callback from App through MenuList to MenuItemCard. Used actual Mahallah Faruq and Mahallah Aminah stall data.
One thing the AI got wrong and how I fixed it: MenuItemCard button onClick initially needed an inline arrow function () => onAdd(item) to prevent premature execution during render; verified it properly fires only upon click.

Week 3
Tool(s): Antigravity (Gemini 3.8 Flash)
What I asked for: Implement asynchronous menu fetching using fetch() and AbortController, create a dedicated CartPage with item quantity modification/removal, build the CheckoutForm with multi-field validation (name, Mahallah, pickup time), and create the daily special banner with a live countdown timer.
What I kept, changed or rejected, and why: Kept the custom validation function returning an errors object, cleanup function aborting pending network requests on unmount, and dynamic time calculation for countdown timer to 10:00 PM.
One thing the AI got wrong and how I fixed it: Initial checkout form did not validate pickup time boundaries against operational hours (07:00 to 22:00); added range comparison checks in the validate function.

Week 4
Tool(s): Antigravity (Gemini 3.8 Flash)
What I asked for: Assist with Week 4 implementation: extract custom hooks (useLocalStorage, useVendors, useCart), set up CartContext and CartProvider for cart and orders state persistence, set up React Router routes (/, /vendor/:id, /cart, /orders, *), Layout with Outlet, NavLink with active state, useNavigate after order placement, and implement personal feature 5 (showing today's specials on the home page linking to vendor pages with countdown).
What I kept, changed or rejected, and why: Kept the extracted custom hooks with JSON try/catch resilience, clean context consumption with useCart() without prop drilling, nested route Layout structure with Outlet, and direct URL deep-linking support for vendors, cart, and orders.
One thing the AI got wrong and how I fixed it: In useVendors, calling setState synchronously inside the effect body triggered an ESLint react-hooks/set-state-in-effect error; resolved it by initializing state cleanly and performing state updates inside reload() and the async promise resolution handlers.
