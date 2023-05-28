# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.245.2/containers/alpine/.devcontainer/base.Dockerfile

# [Choice] Alpine version: 3.16, 3.15, 3.14, 3.13
ARG VARIANT="3.16"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${VARIANT}

# ** [Optional] Uncomment this section to install additional packages. **
RUN apk update \
     && apk add --no-cache fish nodejs npm yarn aws-cli

# install github actions local tester
RUN cd /opt \
     && curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash