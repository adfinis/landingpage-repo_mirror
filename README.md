This repo contains our mirror landing page.
https://pkg.adfinis-sygroup.ch

The page is compiled and minified using nodejs broccoli and then uploaded to our mirror.

# Requirements

NodeJS and npm must be installed on your system.

broccoli and its dependencies are installed using npm:

```bash
npm install
```

# Build the Landingpage

## Build the site and serve it with a built-in server for developing purposes:

```bash
make dev
```

## Build the site for production

```bash
make prod
```

## Build and deploy

```bash
make deploy
```
