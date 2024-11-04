<div align="center">
  <img src="https://avatars.githubusercontent.com/u/92730708?s=96&v=4" /> 
  <h1>Web Components Library Template</h1>
</div>

<p align="center">
  <a href="https://mia-platform.eu/?utm_source=referral&utm_medium=github&utm_campaign=micro-lc">
    <img src="https://img.shields.io/badge/Supported%20by-Mia--Platform-green?style=for-the-badge&link=https://mia-platform.eu/&color=DE0D92&labelColor=214147" alt="Mia-Platform"/>
  </a>
</p>

Boilerplate for a Web Components library flavoured to be used in [micro-lc](https://micro-lc.io/docs).

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

This template already contains a Dockerfile from which a simple Nginx web server can be build. The resulting Docker image may be used, for example, to create and deploy a microservice through [Mia-Platform Console](https://docs.mia-platform.eu/docs/console/tutorials/configure-marketplace-components/create-a-custom-microservice). Keep in mind that this approach may need some [fine tuning](https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/overview#sourcing) if you plan to use your library in [Mia-Platform Microfrontend Composer](https://docs.mia-platform.eu/docs/microfrontend-composer/what-is).

Another option is to push your Web Components statics on a public or private CDN. Unlike the Docker image, this method [should work seamlessly](https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/overview#public-cdn) with Mia-Platform Microfrontend Composer.
