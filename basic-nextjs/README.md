# Basic Nextjs

### ROUTING

Layouts
- shared between multiple pages.
- preserve state, remain interactive, and do not re-render
- *root layout* - on the top of the app directory, applies to all routes
- *nested layouts* - defined inside a folder and apply to specific route sefments

Templates
- similar to layouts - wrap each child layout or page
- unlike layouts - persist across routes and maintain state
- when a user navigated between routes that share a template, state is **not** preserved
- *when?* - features relies on *useEffect* (e.g logging page views) or *useState* (e.g a per-page feedback form)
- template.js is rendered between a layout and its children. 


