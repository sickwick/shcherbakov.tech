FROM node:13-alpine

EXPOSE 4200

COPY . /app

WORKDIR /app

RUN npm i && npm install -g @angular/cli@9.1.1 \
  && npm cache clean --force

CMD ng serve --host 0.0.0.0 --disableHostCheck


