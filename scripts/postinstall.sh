#!/usr/bin/env bash

set -e

if [ "$NODE_ENV" = "ci" ] || [ "$NODE_ENV" = "circleci" ]; then
  echo "Skipping postinstall because NODE_ENV is \"ci\" or  \"circleci\""
  exit $?; # exit with return code of previous command
fi

# Only run migrations automatically on staging and production
if [ "$SEQUELIZE_ENV" = "staging" ] || [ "$SEQUELIZE_ENV" = "production" ]; then
  echo "- running db:migrate on $SEQUELIZE_ENV environment"
  npm run db:migrate
  exit $?; # exit with return code of previous command
fi

if command -v psql > /dev/null; then
  echo "✓ PostgreSQL installed"
else
  echo "𐄂 psql command doesn't exist. Make sure you have PostgreSQL installed."
  echo ""
  echo "See: https://github.com/etudiohq/etudio-api/blob/master/docs/postgres.md"
  echo ""
  exit 1
fi
if psql -lqt | cut -d \| -f 1 | grep -qw etudio_dvl; then
  echo "✓ etudio_dvl exists"
else
  echo "- restoring etudio_dvl";
  npm run db:restore
fi
echo "- running migration if any"
PG_DATABASE=etudio_dvl npm run db:migrate

echo ""
echo "You can now start the Etudio API server by running:"
echo "$> npm run dev"
echo ""
