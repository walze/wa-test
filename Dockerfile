FROM node:16

SHELL ["/bin/bash", "-c"]

WORKDIR /app

COPY . .

RUN npm i

ENTRYPOINT [ "./entrypoint.sh" ]