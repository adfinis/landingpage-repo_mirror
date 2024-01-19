# REPOSITORY MIRROR LANDINGPAGE

[![Lint](https://github.com/adfinis/landingpage-repo_mirror/actions/workflows/lint.yml/badge.svg)](https://github.com/adfinis/landingpage-repo_mirror/actions/workflows/lint.yml)
[![License](https://img.shields.io/github/license/adfinis-sygroup/landingpage-repo_mirror.svg?style=flat-square)](https://github.com/adfinis-sygroup/landingpage-repo_mirror/blob/main/LICENSE)


This repo contains our mirror landing page.
https://pkg.adfinis.com

The page is built with vite and then uploaded to our mirror.

## Requirements

NodeJS and yarn must be installed on your system.

The dependencies of the project have to be installed using yarn:

```bash
yarn
```

## Build the Landingpage

### Vite dev server

```bash
make dev
```
This dev server has hot reloading and many other nice fetures
This also starts a flask server to deal with cors which is automatically used by the solid.js application 

Requirements:
- yarn
- flask
- flask-cors
- httpx

### Build the site for production

```bash
make prod
```

# Contribution

Contributions are more than welcome! Please feel free to open new issues or pull requests.

# License

[GPL-3.0](https://github.com/adfinis-sygroup/landingpage-repo_mirror/blob/main/LICENSE)

# Author Information

landingpage-repo_mirror was written by:

* [Adfinis AG](https://adfinis.com/) | [Twitter](https://twitter.com/adfinis) | [GitHub](https://github.com/adfinis-sygroup)

