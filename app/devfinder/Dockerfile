### STAGE 1: Build ###
FROM public.ecr.aws/docker/library/node:18-alpine AS build
LABEL org.opencontainers.image.description="devfinder" \
      org.opencontainers.image.authors="RoxsRoss" 
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install && yarn run build
EXPOSE 3000
USER node
CMD [ "yarn" ,"start" ]

### STAGE 2: Run ###
FROM public.ecr.aws/docker/library/nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
