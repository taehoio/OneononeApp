FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn run build:tailwind
RUN yarn run build-web


FROM node:16-alpine AS runner
WORKDIR /app

COPY --from=builder /app/build ./build
RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
