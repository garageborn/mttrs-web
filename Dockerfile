FROM node:7.2.1-slim

# install dependencies
RUN apt-get update -qq && apt-get install --fix-missing -y \
  build-essential \
  git-core \
  locales

# setup locale
run echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen && dpkg-reconfigure --frontend=noninteractive locales
RUN locale-gen en_US.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=en_US.UTF-8

# build mttrs-web
ENV MTTRS_WEB /mttrs-web
RUN mkdir $MTTRS_WEB
COPY . $MTTRS_WEB
WORKDIR $MTTRS_WEB

RUN npm install --production --silent --no-progress
