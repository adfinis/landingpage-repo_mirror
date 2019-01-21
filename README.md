# REPOSITORY MIRROR LANDINGPAGE

[![Build Status](https://img.shields.io/travis/adfinis-sygroup/landingpage-repo_mirror.svg?style=flat-square)](https://travis-ci.org/adfinis-sygroup/landingpage-repo_mirror)
[![License](https://img.shields.io/github/license/adfinis-sygroup/landingpage-repo_mirror.svg?style=flat-square)](https://github.com/adfinis-sygroup/landingpage-repo_mirror/blob/master/LICENSE)


This repo contains our mirror landing page.
https://pkg.adfinis-sygroup.ch

The page is compiled and minified using nodejs broccoli and then uploaded to our mirror.

## Requirements

NodeJS and npm must be installed on your system.

broccoli and its dependencies are installed using npm:

```bash
npm install
```

## Build the Landingpage

### Build the site and serve it with a built-in server for developing purposes:

```bash
make dev
```

### Build the site for production

```bash
make prod
```

### Build and deploy

```bash
make deploy
```


# License

`GPL-3.0 <https://github.com/adfinis-sygroup/landingpage-repo_mirror/blob/master/LICENSE>`_


# Author Information

landingpage-repo_mirror was written by:

* [Adfinis SyGroup AG](https://www.adfinis-sygroup.ch/) | [Twitter](https://twitter.com/adfinissygroup) | [GitHub](https://github.com/adfinis-sygroup)

