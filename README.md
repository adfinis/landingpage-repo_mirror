# REPOSITORY MIRROR LANDINGPAGE

[![Build Status](https://img.shields.io/travis/adfinis-sygroup/landingpage-repo_mirror.svg?style=flat-square)](https://travis-ci.org/adfinis-sygroup/landingpage-repo_mirror)
[![License](https://img.shields.io/github/license/adfinis-sygroup/landingpage-repo_mirror.svg?style=flat-square)](https://github.com/adfinis-sygroup/landingpage-repo_mirror/blob/master/LICENSE)


This repo contains our mirror landing page.
https://pkg.adfinis.com

The page is compiled and minified using nodejs broccoli and then uploaded to our mirror.

## Requirements

NodeJS and yarn must be installed on your system.

broccoli and its dependencies are installed using yarn:

```bash
yarnpkg
```

## Build the Landingpage

### Docker

You can build the project using docker.
Make sure to mount the repository root in the docker container at `/app`!

```bash
docker build -t landingpage-repo_mirror docker/
docker run -it --rm -v $PWD:/app landingpage-repo_mirror
```

The "compiled" project will be at `dist`.

### Build the site and serve it with a built-in server for developing purposes:

```bash
make dev
```

### Build the site for production

```bash
make prod
```

# Contribution

Contributions are more than welcome! Please feel free to open new issues or pull requests.

# License

[GPL-3.0](https://github.com/adfinis-sygroup/landingpage-repo_mirror/blob/master/LICENSE)

# Author Information

landingpage-repo_mirror was written by:

* [Adfinis AG](https://adfinis.com/) | [Twitter](https://twitter.com/adfinis) | [GitHub](https://github.com/adfinis-sygroup)

