
FROM node:alpine
WORKDIR /app
COPY .  /app
LABEL NORE="ws 2 rest"
ENV NODE_ENV=production
ENV WSADDRESS=ws://localhost:7890/
LABEL AUTHOR="1141591465@qq.com"
EXPOSE 3000
RUN yarn
CMD [ "yarn", "start"]