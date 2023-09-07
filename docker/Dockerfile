FROM debian:bookworm-slim

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install --no-install-recommends -y yarnpkg nodejs make \
    && rm -rvf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh

VOLUME ["/app"]

ENTRYPOINT ["/entrypoint.sh"]
