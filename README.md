# Nordhealth Signup Task

This project is a **client-side rendered** application built with **Nuxt 3**.  
It implements a **Signup form** using the **Nordhealth Design System (VET Theme)** via Web Components.

## Features

- **Client-side only (SPA)**
- Signup form with:
    - Email (required with validation)
    - Password (required with validation + visibility toggle)
    - Optional checkbox for receiving product updates
- Success page after registration
- **Nordhealth Design System** components integration
- Typed with **TypeScript**
- Custom layout structure
- ESLint and Prettier configuration
- Unit testing setup with **Vitest** and **@nuxt/test-utils**

## Tech Stack
[DEMO](https://688123b24cb43d81410ca615--nordhealth-tt.netlify.app)
```UI test page works only locally```

- **Nuxt 3 (v3.17.6)**
- **TypeScript**
- **Nordhealth CSS + Components**
- **Vite**
- **Vitest** (unit tests)
- **ESLint**

## Setup

### Prerequisites

- Node.js v20.x+
- npm v10.x+
### Installation

```bash
npm install


Development
bash
Copy
Edit
npm run dev
```
Project will run at:
👉 http://localhost:3000/


Project Structure
``` 

  /pages        → Application pages (index, success)
  /layouts      → Application layouts
  /components   → Vue components
  /plugins      → Plugin to register Nordhealth components
```
Plugins
```
import "@provetcloud/css";
import "@provetcloud/web-components";

export default defineNuxtPlugin(() => {});
```

🧪 Running Tests
Run all unit tests
```
npm run test

```
Design System
Nordhealth Design System:


Author
Developed by Andrey Samaiev as part of the Senior Frontend Engineer assessment for Nordhealth.