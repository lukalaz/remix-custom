#!/bin/sh

set -ex
# When deploying to an empty database, replace the db push with 'npx prisma migrate deploy'

npx prisma db push --force-reset
npm run start
