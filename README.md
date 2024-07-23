# Project Inifo

## init

```bash
npm create vite@latest saas-cms-homepage -- --template svelte-ts
cd saas-cms-homepage
npm install
npm install -D tailwindcss postcss autoprefixer
npm install js-yaml simple-git marked bits-ui marked

mkdir -p src/components src/routes k8s
touch src/components/Header.svelte src/components/Sidebar.svelte src/components/TabContent.svelte src/components/MainContent.svelte src/components/MarkdownRenderer.svelte
touch src/routes/index.svelte src/routes/login.svelte src/routes/service.svelte
touch src/gitSync.ts src/config.ts src/App.svelte src/main.ts src/store.ts
touch k8s/deployment.yaml k8s/service.yaml k8s/ingress.yaml
touch Dockerfile

```

# SaaS CMS Homepage

## 项目目录

```bash
SaaS-CMS-Homepage/
├── src/
│ ├── components/
│ │ ├── Header.svelte
│ │ ├── Sidebar.svelte
│ │ ├── TabContent.svelte
│ │ ├── MainContent.svelte
│ │ └── MarkdownRenderer.svelte
│ ├── routes/
│ │ ├── index.svelte
│ │ ├── login.svelte
│ │ └── service.svelte
│ ├── gitSync.ts
│ ├── config.ts
│ ├── App.svelte
│ ├── main.ts
│ ├── store.ts
├── dist/
├── k8s/
│ ├── deployment.yaml
│ ├── service.yaml
│ └── ingress.yaml
├── Dockerfile
├── package.json
├── postcss.config.js
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 开发测试

```bash
npm install
npm run dev
npm run build
npm run serve
npm run docker:build
```

## 部署到 Kubernetes

```
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

## 前端技术栈

- Vite: 一个快速的前端构建工具，用于构建和开发现代 Web 应用。
- Svelte: 一个新型的前端框架，通过将编译步骤前置，生成高效的原生 JavaScript 代码。
- Tailwind CSS: 一个功能类优先的 CSS 框架，用于快速构建自定义用户界面。
- TypeScript: JavaScript 的超集，提供了类型系统，可以更好地发现代码中的错误。
- bits-UI: 一个基于 Svelte 的 UI 组件库，提供了常用的 UI 组件来加速开发。
 
# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
