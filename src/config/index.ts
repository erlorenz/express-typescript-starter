const config = {
  port: parseEnv('PORT'),
  loggerLevel: parseEnv('LOGGER_LEVEL'),
  prettyLogger: process.env.NODE_ENV !== 'production' ? true : false,
  env: process.env.NODE_ENV || 'development',
};

export default config;

// Error if missing any env variables
function parseEnv(envVar: string) {
  if (!process.env[envVar])
    throw new Error('Missing environment variable ' + envVar);
  return process.env[envVar] as string;
}
