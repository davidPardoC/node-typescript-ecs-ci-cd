FROM node:16
COPY package*.json .
RUN npm ci
COPY src/ .
COPY tsconfig.json .
RUN npm run build
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]