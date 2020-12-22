module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/entities/*.js'],
  migrations: ['dist/migration/initial/*.js'],
  cli: {
    migrationsDir: 'src/migration/initial',
  },
  logging: true,
  synchronize: true,
};
