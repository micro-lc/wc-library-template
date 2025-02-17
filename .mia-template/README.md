# mia_template_service_name_placeholder

Boilerplate for a Web Components library flavoured to be used in [micro-lc](https://micro-lc.io/docs).

## Summary

%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%

## Whats inside

This repository contains an opinionated scaffolding for a library of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) built with [Lit](https://lit.dev/) and Typescript support, and bundled with [Vite](https://vitejs.dev/).

The `src` directory contains a series components, each showcasing a specific pattern or feature. Each component comes with a set of [stories](https://storybook.js.org/docs) acting as documentation.

Moreover, the repository ships an HTML pages (`index.html`) that uses the composition features of [micro-lc](https://micro-lc.io/api/composer-api) to render the components and make them work together.

## Local development

To develop the service you need Node.js v20 or later.

To setup Node.js, we suggest using [nvm](https://github.com/creationix/nvm), so you can manage multiple versions easily. Once you have installed nvm, you can go inside the directory of the project and simply run `nvm install`, the `.nvmrc` file will install and select the correct version if you don’t already have it.

To install the dependencies you can launch

```shell
corepack enable
yarn install
```

while build can be issued with `yarn build`.

To test your components in development mode you can run `yarn start` and spin up the `index.html` in the root of the repository. To consult components documentation you can start Storybook running `yarn storybook`.

### Serve your library

Once built, your Web Components library needs to be made available. You have several ways to accomplish this, among which there are **exposing a Docker container** and **publishing on a CDN**.

This template already contains a Dockerfile from which a simple Nginx web server can be build. The resulting Docker image may be used, for example, to create and deploy a microservice through [Mia-Platform Console](https://docs.mia-platform.eu/docs/console/tutorials/configure-marketplace-components/create-a-custom-microservice). Keep in mind that this approach may need some [fine tuning](https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/overview#sourcing) if you plan to use your library in [Mia-Platform Microfrontend Composer](https://docs.mia-platform.eu/docs/microfrontend-composer/what-is). To build and run the Docker image locally you can use:

```shell
docker build -t wc-library .
docker run --rm -p 8080:8080 --name wc-library wc-library
```

and then visit <http://localhost:8080/index.esm.js>.

Another option is to push your Web Components statics on a public or private CDN. Unlike the Docker image, this method [should work seamlessly](https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/overview#public-cdn) with Mia-Platform Microfrontend Composer.
