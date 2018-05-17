# transpose

> TRANsparency in Scholarly Publishing for Open Scholarship Evolution

Because sunlight is the best disinfectant.

## What is transpose?

Transpose is a web-app with a public API that makes it easy to visualize and compare different journals' policies surrounding submission, preprints, peer review, and openness.

## Build Setup

Transpose uses [feathersjs](https://feathersjs.com/), [Nuxt.js docs](https://github.com/nuxt/nuxt.js), and [MongoDB](https://www.mongodb.com/).

``` bash
# make sure you have a mongodb server running at localhost:27017

# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn run dev

# to run whole thing in docker
$ docker-compose up -d

# to initialize data
$ node scripts/initData.js

# to view logs
$ docker logs -f transpose_web_1
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
