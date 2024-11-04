FROM node:20-alpine AS builder

WORKDIR /builder

COPY .yarn/releases .yarn/releases
COPY src src
COPY .yarnrc .yarnrc
COPY package.json package.json
COPY settings.json settings.json
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile
RUN yarn build

########################################################################################################################

FROM nginx:1.27.2-alpine

LABEL name="mia_template_service_name_placeholder" \
      description="%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "mia_template_service_name_placeholder: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY LICENSE LICENSE
COPY --from=builder /builder/dist ./

USER nginx
