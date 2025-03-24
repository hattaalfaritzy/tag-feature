# Ezclass - Code Test
 This project was created as part of the code test for Ezclass's Frontend Engineer role. The application was built using the Next.js framework and other modern tools.

## 🚀 Getting Started

1. **Setting up the Environment.**
Before starting the development server, ensure you have set up the necessary environment variables. Create a .env.local file in the root of the project and add:
```
NEXT_PUBLIC_API_BASE_URL = https://tag-feature-hatta.free.beeceptor.com
```

2. **Running the Development Server**
Start the development server using:
```
npm run dev
# or
yarn dev
# or
pnpm dev
```
Once started, open http://localhost:3000 with your browser to see the application.

## 📚 Script
- `pnpm dev` - Run development mode
- `pnpm build` - Build the application for production
- `pnpm start` - Start a Next.js production server (require pnpm build first)
- `pnpm lint` - Linting the code [ESLint](https://eslint.org/)
- `pnpm lint:fix` - Auto-fixing linting issues
- `pnpm format` - Format the code [Prettier](https://prettier.io/)
- `pnpm format:fix` - Auto-fixing format prettier issues

## 🛠 Tools and Libraries
This project uses a range of modern libraries and tools:
- **Next.js**: The core framework.
- **Axios**: Promise-based HTTP client for making API requests.
- **react-query (useQuery)**: Data fetching and caching for better API performance.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **React Hook Form**: Efficient form management
- **yup**: Object schema validation.

## File Structure

```raw
.
├── 📂 public/                   Public files (e.g. favicon, images, robots.txt).
├── 📂 src/
│   ├── ⚛️ app/                   Next.js page components and routing logic.
│   ├── ⚛️ components/
│   │   ├── ⚛️ commons/           Common reusable UI components (e.g. buttons, inputs).
│   │   └── ⚛️ sections/          Section-based components for specific pages or features.
│   ├── 📂 config/               The configuration for the application (e.g., global settings, constants).
│   │   └── 📂 api/               API request handlers and client-side API utilities.
│   ├── 📂 styles/                Styling files for the project.
│   │   └── index.css             The main CSS file containing TailwindCSS setup and global styles.
│   ├── 📂 types/                 TypeScript type definitions for the application.
│   ├── 📂 utils/                 Utility functions and helpers.
├── .env.example                 Example environment variables for configuration.
├── .gitignore                    Specifies files and directories to be ignored by Git.
├── .prettierignore               Files and directories to be ignored by Prettier formatting.
├── .prettierrc.json              Configuration file for Prettier code formatting rules.
├── .eslint.config.mjs            ESLint configuration for linting JavaScript and TypeScript code.
├── .next-env.d.ts                TypeScript environment definitions for Next.js.
├── next.config.js                Configuration file for Next.js settings.
├── package.json                  Project metadata, dependencies, and scripts.
├── pnpm-lock.yaml                Dependency lockfile for pnpm, ensuring package consistency.
├── README.md                     Documentation about the project.
└── tsconfig.json                 TypeScript configuration for type checking and compilation.

## Notes:
📂: Folder  
⚛️: React-related folder  
