    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'ep-solitary-base-ac57vu2d-pooler.sa-east-1.aws.neon.tech'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', "neondb"),
          user: env('DATABASE_USERNAME', "neondb_owner"),
          password: env('DATABASE_PASSWORD'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: false,
          },
        },
        debug: false,
      },
    });