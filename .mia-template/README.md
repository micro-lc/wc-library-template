# mia_template_service_name_placeholder

Boilerplate for a Web Components library flavoured to be used in [micro-lc](https://micro-lc.io/docs).

## Summary

%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%

## Whats inside

This repository contains an opinionated scaffolding for a library of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) built with [Lit](https://lit.dev/) and Typescript support, and bundled with [Vite](https://vitejs.dev/).

The `src` directory contains three different components, each showcasing a specific pattern or feature. Moreover, the repository ships three HTML pages (`index.html`, `public/test.html`, and `public/test.min.html`) the uses the composition features of [micro-lc](https://micro-lc.io/api/composer-api) to render the components and make them work together.

- `<custom-typography>`: a simple, presentational component build just using Lit. It accepts a property to control the text content, and showcases how a Web Component can be styled with CSS.
- `<custom-button>`: a component built using [back-kit-engine](https://github.com/micro-lc/back-kit-engine) and React that emits a custom event. This component ships also a _manifest_ file making it configurable with Mia-Platform's [Microfrontend Composer Configurator](https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/manifest).
- `<custom-counter>`: a component built using [back-kit-engine](https://github.com/micro-lc/back-kit-engine) library that listens to a custom event.

## Local development

To develop the service you need Node.js v20 or later. 

To setup Node.js, we suggest using [nvm](https://github.com/creationix/nvm), so you can manage multiple versions easily. Once you have installed nvm, you can go inside the directory of the project and simply run `nvm install`, the `.nvmrc` file will install and select the correct version if you don’t already have it.

To install the dependencies you can launch

```shell
corepack enable
yarn install
```

while build can be issued with `yarn build`, or `yarn build-min` for the minified version (where `react`, `react-dom`, and `rxjs` are [externalized](https://rollupjs.org/configuration-options/#external)).

To test your components in development mode run `yarn start`. This command will spin up the `index.html` in the root of the repository. If you want to try the built version of the library, run `yarn preview` and navigate to `/test.html` or `/test.min.html` for the non-minified and the minified version respectively.
